import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/guards/auth.guard";

import { FormComponent } from "./components/form/form.component";
import { PostsListComponent } from "./components/posts-list/posts-list.component";
import { PostDetailsComponent } from "./components/post-details/post-details.component";

const routes: Routes = [
    { path: 'create', component: FormComponent },
    { path: ':id', component: PostDetailsComponent },
    { path: '', component: PostsListComponent },
]
// , canActivate: [AuthGuard]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PostRoutingModule {}