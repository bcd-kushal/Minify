export default function FeaturesSection(){
    const tags = ["Free forever","Open source","MIT License","No user tracking or advertising","Self-host with Docker","Sign-in with GitHub", "Sign-in with email", "Manage multiple accounts", "Custom shortened URLs", "Share and use shortened URLs publicly", "Light or dark theme", "Powered by:"]
    return(
        <section className="px-[24px] bg-[#4445] pt-[112px] pb-[80px] flex flex-col gap-5 items-stretch">
            <div className="text-4xl font-bold">Rich in features</div>
            <div className="text-sm text-[#ddd]">Minify is a passion project of a week&apos;s of hard work, and with that comes a number of re-iterated ideas and features that have been built to (near) perfection.</div>
            <div className="flex flex-wrap gap-4 md:gap-2 md:justify-center items-start justify-start pt-[30px]">
                {tags.map(tag => (
                    <div key={tag} className="px-[16px] py-[10px] flex gap-3 items-center w-fit bg-[#4447] rounded-md hover:bg-white transition-all hover:transition-all hover:text-black">
                        <div className="text-sm">{tag}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}