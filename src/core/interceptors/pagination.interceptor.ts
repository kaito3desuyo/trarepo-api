import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Response } from 'express';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PaginationInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler<Pagination<unknown>>,
    ): Observable<unknown[]> {
        const res = context
            .switchToHttp()
            .getResponse<Response<Pagination<unknown>>>();

        return next.handle().pipe(
            map((v) => {
                res.header('X-Total-Items', String(v.meta.totalItems));
                res.header('X-Total-Pages', String(v.meta.totalPages));
                res.header('X-Current-Page', String(v.meta.currentPage));
                res.header('X-Items-Per-Page', String(v.meta.itemsPerPage));
                return v.items;
            }),
        );
    }
}
