const bugController = require('../../controllers/bugController');
const Bug = require('../../models/Bug');

// Mock the Bug model
jest.mock('../../models/Bug');

describe('Bug Controller Unit Tests', () => {
  let req, res, next;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
    jest.clearAllMocks();
  });

  describe('getBugs', () => {
    it('should return all bugs', async () => {
      const fakeBugs = [{ title: 'Bug 1' }, { title: 'Bug 2' }];
      Bug.find.mockResolvedValueOnce(fakeBugs);

      await bugController.getBugs(req, res, next);

      expect(Bug.find).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(fakeBugs);
    });
  });

  describe('createBug', () => {
    it('should create a new bug and return it', async () => {
      req.body = {
        title: 'New Bug',
        description: 'Bug desc',
        status: 'open',
        priority: 'high',
      };
      const createdBug = { ...req.body, _id: '123' };
      Bug.create.mockResolvedValueOnce(createdBug);

      await bugController.createBug(req, res, next);

      expect(Bug.create).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(createdBug);
    });

    it('should return 400 if title or description is missing', async () => {
      req.body = { title: '', description: '' };

      await bugController.createBug(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Title and description are required' });
    });
  });

  describe('updateBug', () => {
    it('should update and return the bug', async () => {
      req.params = { id: '123' };
      req.body = { title: 'Updated' };
      const updatedBug = { _id: '123', title: 'Updated' };
      Bug.findByIdAndUpdate.mockResolvedValueOnce(updatedBug);

      await bugController.updateBug(req, res, next);

      expect(Bug.findByIdAndUpdate).toHaveBeenCalledWith('123', req.body, {
        new: true,
        runValidators: true,
      });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(updatedBug);
    });

    it('should return 404 if bug not found', async () => {
      req.params = { id: 'notfound' };
      req.body = {};
      Bug.findByIdAndUpdate.mockResolvedValueOnce(null);

      await bugController.updateBug(req, res, next);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Bug not found' });
    });
  });

  describe('deleteBug', () => {
    it('should delete and confirm deletion', async () => {
      req.params = { id: 'delete123' };
      Bug.findByIdAndDelete.mockResolvedValueOnce({ _id: 'delete123' });

      await bugController.deleteBug(req, res, next);

      expect(Bug.findByIdAndDelete).toHaveBeenCalledWith('delete123');
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Bug deleted successfully' });
    });

    it('should return 404 if bug not found to delete', async () => {
      req.params = { id: 'notfound' };
      Bug.findByIdAndDelete.mockResolvedValueOnce(null);

      await bugController.deleteBug(req, res, next);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Bug not found' });
    });
  });
});
