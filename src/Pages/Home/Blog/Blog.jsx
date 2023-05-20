

const Blog = ()=>{
    return(
        <div> 
            <h2 className="text-5xl text-center p-5">Blog</h2>
           <div className="flex mb-5 ml-5">
           
            <div className="bg-amber-200 w-1/2 mr-3">
                <h1 className="text-2xl ml-5">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className="text-xl px-8">
                    Access tokens contain informations, server needed to know if the user can access the requested resource. It has short validity period.
                    It is a type of secure string with 30 minutes lifespan.<br ></br>
                    Refresh token are used to generate new access tokens. After the expiration of acceess tokens, user has to authenticate again 
                    to obtain access token. Refresh token enables user to skip this stepand get new access token.<br />
                    The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a 
                    credential when it calls the target API. The passed token informs the API that the bearer of the token has been authorized 
                    to access the API and perform specific actions specified by the Scope that was granted during authorization. after access 
                    tokens expire, user sends request to another endpoint to renew access token <br />
                    Access and refresh tokens can be stored in server side sessions.
                </p>

                <h1 className="text-2xl ml-5">2. Compare SQL and NoSQL databases?</h1>
                <p className="text-xl px-8">
                    SQL: <br />
                    1. Developed for file storage in 1970.<br />
                    2. Supports structured query language.<br />
                    3. Table based data type.<br />
                    4. Vertically scaleable.<br />
                    5. Suitble fro complex queries.<br />

                    NoSQL: <br />
                    1. Developed for unstructured and semi-structured data in 2000.<br />
                    2. No declaretive structured language needed.<br />
                    3. Document oriented and graph database type.<br />
                    4. Horizontally scaleable.<br />
                    5. suitable for unstructed data or documents.<br />
                </p>
            </div>
            <div className="bg-lime-300 w-1/2 pl-1">
                <h1>What is express js? What is Nest JS?</h1>


                <h1>What is MongoDB aggregate and how does it work?</h1>
            </div>
           </div>
        </div>
    );
};

export default Blog;

