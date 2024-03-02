import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { pool } from '../db';
import UserService from '../services/user.service';
export async function loginMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { username, password } = req.query;
        console.log(username, password);
        console.log(typeof username);
        if (!username || !password) {
            res.status(400).json({ message: 'Vui lòng cung cấp tên người dùng và mật khẩu.' });
            return;
        }
        if (typeof username !== 'string' || typeof password !== 'string') {
            res.status(400).json({ message: 'Vui lòng cung cấp tên người dùng và mật khẩu.' });
            return;
        }
        
        const userList = await UserService.getUserByUserName(username);
        const user = userList[0];
        if (!user) {
            res.status(404).json({ message: 'Người dùng không tồn tại.' });
            return;
        }
         
         console.log(user.password);
         const isPasswordValid = user.password === password? 'password' : 'false';

        if (isPasswordValid=='false') {
            res.status(401).json({ message: 'Tên người dùng hoặc mật khẩu không chính xác.' });
            return;
        }

         const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: "1h" });

         (req as any).token = token;

        next();
    } catch (error) {
        console.error('Lỗi khi đăng nhập:', error);
        res.status(500).json({ message: 'Đã xảy ra lỗi khi đăng nhập.' });
    }
}
export function authenticateToken(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        res.status(401).json({ message: 'Token không được cung cấp.' });
        return;
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        res.status(401).json({ message: 'Token không được cung cấp đúng cách.' });
        return;
    }

    const token = parts[1];
    
    try {
        // const decoded = jwt.verify(token, 'secret_key');
        if(token == 'secret_key'){
            next();
        }
        res.sendStatus(403);
        
    } catch (error) {
        console.log(error);
        res.sendStatus(403);
        return;
    }
}
