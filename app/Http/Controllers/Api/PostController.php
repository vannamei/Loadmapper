<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
  public function index()
  {
    $posts = Post::all();
    return $this->jsonResponse($posts);
  }

  public function create(Request $request)
  {
    $post = new Post;
    $post->name = $request->name;
    $post->content = $request->content;
    $post->save();
    return $this->jsonResponse($post);
  }

  public function edit(Request $request)
  {
    $post = Post::find($request->id);
    return $post;
  }

  public function update(Request $request)
  {
    $post = Post::find($request->id);
    $post->name = $request->name;
    $post->content = $request->content;
    $post->save();
    $posts = Post::all();
    if ($posts) {
      return response()->json($posts, 200);
    } else {
      return response()->json(['message' => 'Post not found'], 404);
    }
  }

  public function delete(Request $request)
  {
    $post = Post::find($request->id);
    $post->delete();
    $posts = Post::all();
    if ($posts) {
      return response()->json($posts, 200);
    } else {
      return response()->json(['message' => 'Post not found'], 404);
    }
  }
}
