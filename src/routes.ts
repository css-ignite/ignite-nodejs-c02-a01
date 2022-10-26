import { Request, Response } from 'express';
import CreateCourseService from './createCourseService';

export function createCourse(request: Request, response: Response) {
    const retorno = CreateCourseService.execute({
        name: 'NodeJS', 
        duration: 10, 
        educator:'Claudney'
    });

    response.status(201).json({
        message: 'Course created',
        data: retorno
    });
}

export default createCourse;