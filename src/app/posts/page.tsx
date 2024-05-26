import PostList from '@/components/posts-list'
import { Suspense } from 'react'

export default function Page() {

    return <main className='text-center pt-16 px-5'>
        <h1 className='mb-4 text-4xl font-bold md:text-5xl'>wc to my blog</h1>
        <p className='max-w-[750px] mx-auto'>all posts</p>

        <Suspense fallback='Loading...'>
            <PostList />
        </Suspense>
    </main>
} 