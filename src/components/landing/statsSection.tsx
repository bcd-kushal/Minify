
export default function StatsSection(){
    const statistics = [
        { stat: "150+",     for: "GitHub stars" },
        { stat: "38,000+",  for: "URLs shortened" },
        { stat: "470+",     for: "Users signed up" },
    ]

    return(
        <section className="px-[24px] py-[112px] flex gap-4 items-center justify-evenly w-[100%] md:flex-col md:justify-start md:items-stretch md:gap-10">
            {statistics.map(stat => (
                <div key={stat.for} className="flex flex-col gap-2">
                    <span className="text-center font-bold text-3xl">{stat.stat}</span>
                    <span className="text-center text-xs">{stat.for}</span>
                </div>
            ))}
        </section>
    )
}