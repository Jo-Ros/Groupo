import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, switchMap } from "rxjs";

import { Post } from "../models/post.model";

@Injectable ({
    providedIn: 'root'
})
export class PostsService {
    constructor(private http: HttpClient) {}

    getAllPosts(): Observable<Post[]> {
        return this.http.get<Post[]>('http://localhost:8800/api/posts')
    }

    
}