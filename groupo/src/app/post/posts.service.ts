import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, switchMap } from "rxjs";
import { environment } from "src/environments/environment";

import { Post } from "./models/post.model";

@Injectable ({
    providedIn: 'root'
})
export class PostsService {
    constructor(private http: HttpClient,) {}

    getAllPosts() {
        return this.http.get<Post[]>(`${environment.protocolHost}/api/posts`)
    }

    getPostById(postId: string) {
        return this.http.get<Post>(`${environment.protocolHost}/api/posts/${postId}`)
    }

    likePost( postId: string, likeType: 'liked' | 'unliked') {
        return this.getPostById(postId).pipe(
            map( post => ({
                ...post,
                likesNumber: post.likesNumber + (likeType === 'liked' ? 1 : -1 )
            })),
            switchMap(updatedPost => this.http.put<Post>(`${environment.protocolHost}/api/posts/${postId}/like`, updatedPost))
        )
    }

    postPost( formValue: Post) {
        return this.http.post<Post>(`${environment.protocolHost}/api/posts`, formValue)
    }
}