const User = async ({ params }) => {
    const { id } = await params;

    const data = await fetch(`https://api.github.com/users/${id}`);

    const response = await data.json();
    console.log(response);


    return (
        <>
            <div className="flex justify-center gap-5 my-10">
                <div id="intro" className="bg-white text-black p-2 rounded">
                    <img src={response.avatar_url} alt={response.name} className="rounded-full border-dark border-6 shadow-xl shadow-black" width={200} height={200} /> <br />
                    <p className="bg-[#8f969c] m-1 p-1 rounded text-center font-semibold">{response.login}</p>
                    <p className="bg-[#8f969c] m-1 p-1 rounded opacity-75">{response.name}</p>
                    <div className="bg-white text-dark p-2 rounded border-black">
                        <ul>
                            <p> {response.bio}</p>
                            <p> {response.company}</p>
                            <p> {response.email}</p>
                        </ul> <br />
                        <a href={response.html_url} target="_blank">
                            <button className=" border decoration-2 rounded-lg w-full bg-[#101a43] p-2 text-lg outline-[#8f969c] text-white cursor-pointer" id="next">
                                View Github</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center flex-wrap gap-5 p-5">
                <div className="bg-white rounded text-black p-5 text-center w-50 cursor-pointer ">
                    <p>{response.public_repos}</p>
                    <h2 className="font-bold text-lg">Public Repository</h2>
                </div>
                <div className="bg-white rounded text-black p-5 text-center w-50 cursor-pointer">
                    <p>{response.following}</p>
                    <h2 className="font-bold text-lg">Following</h2>
                </div>
                <div className="bg-white rounded text-black p-5 text-center w-50 cursor-pointer">
                    <p>{response.followers}</p>
                    <h2 className="font-bold text-lg">Followers</h2>
                </div>
            </div>
        </>
    );
};

export default User