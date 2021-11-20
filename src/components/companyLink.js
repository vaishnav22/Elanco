import React, {useState} from 'react'
import './companyLink.css'

function CompanyLink() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    const data = [
        {
            company: 'Atopica® (cyclosporine capsules) USP MODIFIED',
            data: "A proven product for atopic dermatitis for dogs. Atopica targets the cause of the problem to help reduce the incessant scratching, rubbing and licking\r\nAtopic Dermatitis:\r\n1. Is a lifelong condition.1\r\n2. Can be seasonal or year-round.1\n3. Is one of the most common causes of itching in dogs.2\nATOPICA:\n1.Is the first medication specifically approved for the control of chronic atopic dermatitis in dogs weighing at least 4 lbs. (1.8 kg). Effectively relieves itchiness and reduces skin lesions.\n2. Provides proven long-term relief. 98% of pet owners would recommend to friends.\n3. If your dog is constantly scratching or licking, it may be suffering from atopic dermatitis. To help your veterinarian evaluate your dog, click here to take a 1-minute canine atopic dermatitis quiz. Print the results and bring them to your appointment.",
            link: "https://www.elanco.us/products-services/dogs/atopica-cyclosporine-capsules-usp-modified"
        },
        {
            company: 'Bronchi-Shield® ORAL',
            data: `Bronchi-Shield ORAL offers fast, one-and-done protection* against Bordetella, a common cause of Canine Infectious Respiratory Disease (CIRD).
            Bronchi-Shield ORAL was the first modified-live avirulent Bordetella bronchiseptica vaccine licensed for oral administration. Additionally, it’s easy to administer for mucosal delivery and has been proven effective in a published, peer-reviewed challenge study.`,
            link: "https://www.elanco.us/products-services/dogs/bronchi-shield-oral"
        },
        {
            company: 'Comfortis® (spinosad)',
            data: `Number 1 recommended prescription oral-flea only medication¹.

            Fast Speed of Kill
            
            Starts killing fleas in 30 minutes
            Killed 100% of fleas in four hours
            Kills fleas before they can lay eggs
            Excellent flea kill for a full month
            Kill fleas before they lay eggs with a 90-day treatment plan using Comfortis and routinely thereafter to prevent reinfestation.`,
            link: "https://www.elanco.us/products-services/dogs/comfortis"
        },
        {
            company:'Credelio® (lotilaner)',
            data:`Powerful, yet easy on your dog. Credelio’s active ingredient, lotilaner, is a member of the isoxazoline family, a novel class of parasiticides that in an in vitro study, showed strong activity on the receptors of ticks and fleas, and no activity on the receptors of dogs.`,
            link: "https://www.elanco.us/products-services/dogs/credelio"
        },
        {
            company: 'Deramaxx® (deracoxib)',
            data: `DERAMAXX has stood the test of time; it’s helped manage the pain and inflammation of canine OA for over 15 years. More than 230 million doses have been prescribed1 for OA pain relief to help dogs remain active so they can run, jump and play to their hearts' content.`,
            link: "https://www.elanco.us/products-services/dogs/deramaxx"
        },
        {
            company: 'Duramune Lyme',
            data:`Seeing the blue dot show up on a Lyme test is frustrating for you and your clients. With Duramune Lyme®, you can confidently help stop Lyme disease before it starts.

            Reduce the likelihood of positive results with the only Lyme vaccine that provided 92.2% efficacy against natural infection in a highly endemic area in a peer-reviewed study*1 and 100% efficacy against the disease in a laboratory setting2
            Duramune Lyme contains multiple types of outer-surface proteins,3,4 not just OspA and OspC. It also comes in convenient combinations, which means fewer needle sticks to help prevent disease`,
            link: "https://www.elanco.us/products-services/dogs/duramunelyme",
        },
        {
            company:'Entyce® (capromorelin oral solution)',
            data: `Entyce delivers visible results with ~7/10* dog owners reporting increased appetite in just 4 days of treatment.2
            Dogs can safely take Entyce throughout their treatment journey, even with a wide range of comorbidities.
            Entyce works like the body's own natural hunger hormone, ghrelin.
            Entyce increases appetite, leading to increased food consumption.`,
            link:"https://www.elanco.us/products-services/dogs/entyce"
        }
    ]

    console.log(data.data);
    return (
        <div className="description">
            <div className="section-data">
                <h2 className="section-data-h2">Elanco products address a variety of animal health issues. Click on the logo below to learn more about each product’s specific applications and talk with your veterinarian today to select the best products for your dog.</h2>
            </div>
            <div className="wrapper">
                <div className="accordion">
                    {data.map((item, i) => (
                        <div className="item">
                            <div className="title" onClick={() => toggle(i)}><h2 className="company_title">{item.company}</h2><span>{selected ===i ? '-' : '+'}</span></div>
                            <div className={selected ===i ? 'content show' : 'content'}><h3 className="company_data">{item.data}</h3><a className="company_link" href={item.link}>Click here for more info.</a></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CompanyLink
