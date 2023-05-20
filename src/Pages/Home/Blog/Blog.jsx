

const Blog = ()=>{
    return(
        <div> 
            <h2 className="text-5xl text-center p-5">Blog</h2>
           <div className="flex mb-5 ml-5">
           
            <div className="bg-amber-200 w-1/2 mr-3 rounded p-5">
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

                <h1 className="text-2xl ml-5 mt-3">2. Compare SQL and NoSQL databases?</h1>
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
            <div className="bg-lime-300 w-1/2 p-5 rounded">
                <h1 className="text-2xl ml-5">3. What is express js? What is Nest JS?</h1>
                <p className="text-xl px-8">
                    ExpressJs acts as a bridge between front-end and a back-end of a web application. It is kind of media that processes data between
                    this two and enables user to interact. It includes middleware, routing etc. which makes easy for the user to develop web application.
                    In short, expressJs is free and open source framework built on node.Js to simplify building server-side web applications.<br />
                    NestJs is another framework of NodeJs used for building efficient and scaleable web applications. It is known for producing
                    highly testable maintainable web applications using JavaScript and TypeScript. It provides few tools like fastify or express.
                    It also enables to use REST or GraphQL APIs.
                </p>


                <h1 className="text-2xl ml-5 mt-3">4. What is MongoDB aggregate and how does it work?</h1>
                <p className="text-xl px-8">
                    MongoDb aggregate is a process of processing large number of documents ina collection by means of passing them through different
                    stages. This stage is called pipeline. This pipleline can filter, find, reshape etc. MongoDB aggregate assembales the data in different
                    documents then executing in various ways. It uses pipeline for aggregating which definespossibilities of different operation.

                </p>
            </div>
           </div>
        </div>
    );
};

export default Blog;

