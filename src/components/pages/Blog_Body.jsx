import { Link } from "react-router-dom";

export default function Blog_Body() {
    return (
        <article class="blog active" data-page="blog">

            <header>
                <h2 class="h2 article-title">Blog</h2>
            </header>

            <section class="blog-posts">

                <ul class="blog-posts-list">

                <li class="blog-post-item">
                        <Link to='/blog/Is-a-Bachelor’s-Degree-Necessary-to-Master-Frontend-Web-Development?'>

                            <figure class="blog-banner-box">
                                <img src="./assets/images/blog/blog-2.jpg" alt="Design conferences in 2022"
                                    loading="lazy" />
                            </figure>

                            <div class="blog-content">

                                <div class="blog-meta">
                                    <p class="blog-category">Learning</p>

                                    <span class="dot"></span>

                                    <time datetime="2023-12-27">Dec 27, 2023</time>
                                </div>

                                <h3 class="h3 blog-item-title">Is a Bachelor’s Degree Necessary to Master Frontend Web Development?</h3>

                                <p class="blog-text">
                                In the rapidly evolving world of technology, the question often arises: “Is a Bachelor’s degree necessary to master frontend web development?” The answer is not as straightforward as one might think.

                                </p>

                            </div>

                        </Link>
                    </li>

                    <li class="blog-post-item">
                        <Link to='/blog/Just-Watching-Video-Tutorials-from-YouTube-Doesn’t-Make-You-an-Experienced-Web-Developer'>

                            <figure class="blog-banner-box">
                                <img src="./assets/images/blog/blog-3.jpg" alt="Design conferences in 2022"
                                    loading="lazy" />
                            </figure>

                            <div class="blog-content">

                                <div class="blog-meta">
                                    <p class="blog-category">Learning</p>

                                    <span class="dot"></span>

                                    <time datetime="2023-12-26">Dec 26, 2023</time>
                                </div>

                                <h3 class="h3 blog-item-title">Just Watching Video Tutorials from YouTube Doesn’t Make You an Experienced Web Developer</h3>

                                <p class="blog-text">
                                    In the digital age, learning new skills has never been easier. With platforms like YouTube, anyone can access a wealth of knowledge at their fingertips. This is particularly true for web development, where countless video tutorials are available for free. However, while these resources are undoubtedly valuable, it’s important to understand that merely watching these tutorials doesn’t make one an experienced web developer.

                                </p>

                            </div>

                        </Link>
                    </li>

                    <li class="blog-post-item">
                        <Link to='/blog/How-Reading-Books-Makes-You-A-Better-Front-End-Developer'>

                            <figure class="blog-banner-box">
                                <img src="./assets/images/blog/blog-1.jpg" alt="Design conferences in 2022"
                                    loading="lazy" />
                            </figure>

                            <div class="blog-content">

                                <div class="blog-meta">
                                    <p class="blog-category">Thinking</p>

                                    <span class="dot"></span>

                                    <time datetime="2023-12-25">Dec 25, 2023</time>
                                </div>

                                <h3 class="h3 blog-item-title">How Reading Books Makes You a Better Front-End Developer</h3>

                                <p class="blog-text">
                                    As a front-end developer, your primary tools are likely to be practical ones: coding languages, libraries, frameworks, and design tools. However, there’s another tool that can significantly enhance your skills and career: <important>reading books</important>.<br />

                                </p>

                            </div>

                        </Link>
                    </li>


                </ul>

            </section>
            {/* <!-- For showing the blog content --> */}

            <section class="blog-post-content" data-blog-post-content>
                <div class="blog-post-details">
                    <h2 class="h2" data-blog-post-title></h2>
                    <figure class="blog-banner-box">
                        <img src="" alt="Blog Post Image" loading="lazy" data-blog-post-image />
                    </figure>
                    <div class="blog-meta">
                        <p class="blog-category" data-blog-post-category></p>
                        <span class="dot"></span>
                        <time datetime="" data-blog-post-date></time>
                    </div>
                    <p class="blog-text" data-blog-post-text></p>
                </div>
            </section>
        </article>
    )
}