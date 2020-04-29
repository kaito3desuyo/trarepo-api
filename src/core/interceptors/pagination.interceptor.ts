import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PaginationInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler<Pagination<unknown>>,
    ): Observable<any> {
        const res = context.switchToHttp().getResponse();

        return next.handle().pipe(
            map((v) => {
                res.header('X-Total-Items', v.meta.totalItems);
                res.header('X-Total-Pages', v.meta.totalPages);
                res.header('X-Current-Page', v.meta.currentPage);
                res.header('X-Items-Per-Page', v.meta.itemsPerPage);
                return v.items;
            }),
        );
    }
}
