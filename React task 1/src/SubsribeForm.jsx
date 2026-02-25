function SubscribeForm() {
    return (
        <section className="flex justify-center items-center p-2 rounded-md bg-blue-300">
            <div>
                <h1 className="text-4xl m-8">SUBSCRIBE</h1>
                <p className="text-2xl m-4">Sign up with your email address to receive news and updates.</p>

                <div>
                    <input className="rounded-md m-4 text-center" placeholder="First name" />
                    <input className="rounded-md m-4 text-center" placeholder="Last name" />
                    <input className="rounded-md m-4 text-center" placeholder="Email" />
                </div>

                <button className="bg-red-400 p-4 rounded-lg text-white font-medium px-32 py-4 mt-4">Subscribe</button>
            </div>
        </section>
    )
}

export default SubscribeForm