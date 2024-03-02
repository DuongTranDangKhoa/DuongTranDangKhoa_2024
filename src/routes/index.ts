import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import * as postController from '../controllers/post.controller';
import * as commentController from '../controllers/comment.controller';
import { errorHandler } from '../middlewares/errorHandler.middleware';
import {loginMiddleware, authenticateToken } from '../middlewares/authentiocate.middleware';
export const router = Router();

router.post('/user',loginMiddleware,authenticateToken, userController.getAllUsers );

router.post('/user/:id', loginMiddleware, authenticateToken ,userController.getUserById);

router.post('/createuser' ,authenticateToken, userController.createUser);

router.put('/user/:id', loginMiddleware,authenticateToken, userController.updateUserById);

router.delete('/user/:id', loginMiddleware,authenticateToken, userController.deleteUserById);

router.get('/post', authenticateToken ,errorHandler , postController.getAllPost);

router.get('/post/:id', authenticateToken ,errorHandler , postController.getPostById);

router.post('/post', authenticateToken ,errorHandler, postController.createPost);

router.put('/post/:id' ,authenticateToken, errorHandler, postController.updatePostById);

router.delete('/post/:id',authenticateToken ,errorHandler, postController.deletePostById);

router.get('/comment',authenticateToken, errorHandler, commentController.getAllComment);

router.get('/comment/:id', authenticateToken,errorHandler, commentController.getCommentById);

router.post('/comment',authenticateToken,errorHandler, commentController.createComment) ;

router.put('/comment/:id',authenticateToken,errorHandler, commentController.updateCommentById);
router.delete('/comment/:id',authenticateToken,errorHandler, commentController.deleteCommentById) ;


