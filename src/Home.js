import React from 'react';
import './Home.css';
import Banner from "./Banner";
import Card from "./Card";



function Home() {
    return (
        <div className='home'>
            <Banner/>
            <div className="home_section home_section_1">
                <Card
                    src = "https://cdn.thespaces.com/wp-content/uploads/2020/11/MITCHELLSSTR%C3%86DE-30-2820-GENTOFTE-COTTAGE-FOR-SALE-VIA-ADAM-SCHNACK-6-1024x588.jpg"
                    title = "Modern lakefront cottage"
                    description = "An architect’s studio is now a modern home on Lake Gentofte’s shores following a gentle renovation to polish its historic bones."
                />
                <Card
                    src = "https://cdn.thespaces.com/wp-content/uploads/2020/11/Kabe%CC%88k-cabin-by-U%CC%81ba%CC%81li_02.jpg"
                    title = "Kabëk cabin"
                    description = "Costa Rica’s Talamanca mountains were the inspiration for this prefab home. which has a flexible footprint that allows it to adapt to rough terrain."
                />
                <Card
                    src = "https://cdn.thespaces.com/wp-content/uploads/2020/11/Chojaya-a-250-year-old-thatched-roof-farmhouse-in-Hiroshima-credit-Setouchi-Cominca-Stays___-1024x681.jpg"
                    title = "cominca"
                    description = "Shobara is said to be the burial place of the goddess Izanami."
                    price = ""
                />
            </div>
            <div className="home_section">
                <Card
                    src = "https://a0.muscache.com/im/pictures/fe525a79-335e-4deb-937c-491218b037e4.jpg?im_w=960"
                    title = "Ivy Cottage at Stumpfields"
                    description = "This is a self-catering cottage with a bedroom/ living area, kitchen/dining room and an en suite bathroom."
                    price = "₹3,143/ night"
                />
                <Card
                    src = "https://a0.muscache.com/im/pictures/ace91ce3-3a81-49c3-9414-cf28dc962396.jpg?im_w=960"
                    title = "Emerald dove (Kotagiri)"
                    description = "The rooms are spacious comfort with a king size bed.The room has its own sit out. The room has an attached bath, tea/coffee kettle, mini fridge and a flat screen television."
                    price = "₹3,379/ night"
                />
                <Card
                    src = "https://a0.muscache.com/im/pictures/54567abe-28fd-4f4e-9622-a9d1c6ed840f.jpg?im_w=960"
                    title = "Whispering Waters - Mountain Farm Cottage 2"
                    description = "Picture perfect rustic stone cottages nestled in the midst of a 4 acre pear orchard."
                    price = "₹4,449/ night"
                />
            </div>
        </div>
    )
}

export default Home
