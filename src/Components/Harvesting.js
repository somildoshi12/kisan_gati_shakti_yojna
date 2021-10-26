import React from 'react'
import './Harvesting.css';
// import img from './Image/andhra.jpg';
import img from './Images/andhra.jpg';

export default function Harvesting() {
    return (
        <div>
            <div className="harvestingPage">
                <div className="harvestingTitle">
                    <h1>Harvesting plan for Andhra Pradesh</h1>
                </div>
                <br />
                <div className="bg">

                    <h3>Climatic Condition</h3>
                    <div className="container">
                        <p>The region has a tropical climate and depends on monsoons for rainfall. According to the Köppen climate classification, it has a non-arid climate with minimum mean temperatures of 18 °C (64 °F). The most humid is the tropical monsoon climate characterized by moderate to high year-round temperatures and seasonally heavy rainfall above 2,000 mm (79 in) per year. The tropical climate is experienced in a strip of south-western lowlands abutting the Malabar Coast, the Western Ghats; the islands of Lakshadweep and Andaman and Nicobar are also subject to this climate</p>
                    </div>
                    <br />
                    <div className>
                        <img className="image" src={img} alt="temp" />
                    </div>
                    <br />
                    <h3>Harvesting method :-</h3>
                    <div className="container">
                        <p>Rainwater harvesting (RWH) is a simple method by which rainfall is collected for future usage. The collected rainwater may be stored, utilised in different ways or directly used for recharge purposes. With depleting groundwater levels and fluctuating climate conditions, RWH can go a long way to help mitigate these effects. Capturing the rainwater can help recharge local aquifers, reduce urban flooding and most importantly ensure water availability in water-scarce zones. Though the term seems to have picked up greater visibility in the last few years, it was, and is even today, a traditional practice followed in rural India. Some ancient rainwater harvesting methods followed in India include madakas, ahar pynes, surangas, taankas and many more.
                            <br />
                            This water conservation method can be easily practiced in individual homes, apartments, parks, offices and temples too, across the world. Farmers have recharged their dry borewells, created water banks in drought areas, greened their farms, increased sustainability of their water resources and even created a river. Technical know how for the rooftop RWH with direct storage can be availed for better implementation. RWH An effective method in water scarce times, it is also an easily doable practice</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
