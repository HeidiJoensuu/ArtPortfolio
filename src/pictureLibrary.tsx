import { useState } from "react"
import bonsaiTree from "./assets/bonsaiTree.png"
import bookPrint from "./assets/bookPrint.JPG"
import easterEgg from "./assets/IMG_2899.JPG"
import logoPaint from "./assets/logopaint.png"
import monument1 from "./assets/Monument1.JPG"
import necklace from "./assets/Necklase.JPG"
import parkourPeople from "./assets/parkourPeople.png"
import room from "./assets/room.png"
import strangeShip from "./assets/StrangeShip.JPG"
import tunnel from "./assets/tunnel.png"
import fireShip from "./assets/Vene2.JPG"
import {Grid, Image, List, Transition, Header, Button } from 'semantic-ui-react'

const PictureLibrary = () => {
    const [tik, setTik] = useState(0)
    const picturelist = [
        {"header": "Info", "text": ["Info here jotain kivaa tekstiä ja paljon"], "pic": ""},
        {"header": "Fire Ship", "text": ["This little funny experience was created on a dark evening as the whim of the moment.", "The main starting point was this classic childish idea of creating a little ship of tealight’s cover. Then I got an idea of a sail that I made of fire instead of fabric. And lastly of how it would be reflected on the surface of blue water.", "So I created Stages with a glass tray and strongly colored blue water. The outcome was quite nice although it was only a short 20 minute crafting.", "A lonely ship at the sea with its fire sail as its only light."], "pic": fireShip},
        {"header": "Frozen Necklace", "text": ["This has a second name: “Frozen Heart”. I had this beautiful necklace and it glowed a little in the dark. One day I wanted to get a background photo on my facebook and I decided to use this necklace.", "So I waited until there was new clean and soft snow. It was a bit dark outside, just enough that the necklace glowed. After that I photoshopped the picture brighter and made the necklace to glow many times brighter. I also focused the viewer's attention on the necklace by blurring the surroundings of the pendant."], "pic": necklace},
        {"header": "Logo Draw", "text": ["When I wanted to become an architect I was at a training course for the exams. At that time I wasn’t the best in the world at drawing, but good enough that I could have gotten in. During that course we got some homework to do with a time limit of three hours (just like in the exams). This was one of the homeworks.", "Idea was to create a new logo for some imaginary restaurant that would be used at street restaurant events. Logo would be used in three objects and one of them must be a take away box. So I created a logo whose appearance you could use as the shape of a take away box. For balloons and menu I don’t remember if they were in the assignment or not…"], "pic": logoPaint},
        {"header": "The Tunnel", "text": ["In this three hour assignment there was an idea to create some kind of tunnel from one building to another. The tunnel would go through a small park and therefore must blend in. I decided to create a class tunnel. Easy to see through “warm” enough when people walk through during winter."], "pic": tunnel},
        {"header": "Mysterious People", "text": [`This assignment was about creating a picture of people who do parkour. Main point was to learn to draw a human body. I decided to create some mysticism and leave people's faces out like they are in a strong one sided light. You can’t see, but you know that the main character is looking right at you.`, `”This frightens me, and I like it”, were the words people said about this picture.`], "pic": parkourPeople},
        {"header": "Lapland Monument", "text":["In this assignment, the intention was to create a 3D monument that would be placed on the arm of a Finnish maiden. It could be found after a long hike on top of the hill. I created a monument where people were able to rest on it and look at the views. It had sharp edges, but the shape was soft and light."], "pic": monument1},
        {"header": "Research Ship", "text": ["Pre-assignment for architecture! Idea was to create a model of a research ship by using folio and disposable plates. The ship was to be unmanned and was sended to examine a new word that was habitable. I created a low bul-like vessel. It moved by using its short legs and collecting samples with its claws.", "I created a world that had strange huge pillar-like plants among other ‘normal’ plants. Pillars were so huge that normal plants were able to live on them as symbiotes. The pillar plants push water up to the top to support the symbiotic plants. Left over water created huge rivers around the land.", "In the second picture (lost) there was a situation where the research ship crashed and the planet natives were able to explore it. I created natives to be light figured and had feathers. With their body they were able to glide between huge pillars like a flying squirrel."], "pic": strangeShip},
        {"header": "Easter Egg('s)", "text": ["In other words. My little teeny tiny paintings.", "I love Mignon eggs. Only chocolate type that I just can’t say no to. And since each celebrated season starts a month early at stores, there are Mignon Eggs at the shops for over one or two months.", "So sometimes I paint one of the eggs and that one must “survive” to Easter to be my viral Easter egg. (All the others I’m free to eat.)"], "pic": easterEgg},
        {"header": "Sketching for stories", "text": ["I have written many notes for various fantasy/sci-fi stories. Some notes are almost many pages long with details and plot ideas. Sometimes I sketch ideas that I have for the stories.", "On the right: Book cover for one of my stories. One of the main ideas is that the stone in the picture is stolen. So the book cover outlines the situation when its storage box has been crashed and the stone is out. Classes all around indicate that there has been used force while breaking it.", "On the left: Coat of arms that one country used as their symbol. The vines tell of growing and the torch represents power."], "pic": bookPrint},
        {"header": "My Bonsai Tree", "text": ["Yes. This is my bonsai tree. I'm a pretty excellent planter who just is able to get any plant to grow and flourish. Except for a bonsai tree. I have tried many times and always when I just place a new bonsai tree into my apartment it only takes a few weeks and it’s dead.", "So when the last one died I decided to paint one. So right now this is my bonsai until one day I will figure out how to keep the real one alive."], "pic": bonsaiTree},
        {"header": "Living room", "text": ["My living room? Yes!", "In my first apartment I was allowed to do almost anything I wanted. So of course the first thing I did was to paint one of the walls to black in my living room. When people heard the plan they tried to warn me of how dark and depressing my new home would become.", "Well. I already had set my mind to it and created it. As a counterweight to the black wall I placed mirrors. They created an illusion of lightness and larger space. I also placed a huge light-gray carpet to bring light colors closer to the dark.", "When my home was ready instead of judgment people started to spread a word about how awesome my living room was. That’s why my living room is in this portfolio. (And cannot wait that day I can decorate again my home as I want.)"], "pic": room}
    ]

    const handleClick = (index: number) =>{
        setTik(index)
    }
    const art_text = (text: Array<string>) => {
        return text.map((t: string) => {
            return <p>{t}</p>
        })
    }

    return (
        <Grid centered columns={2} style={{paddingLeft: "50px", paddingRight: "50px", maxHeight: "100vh"}}>
            <Grid.Column verticalAlign="top" width={3}>
                <Button.Group vertical >
                    {picturelist.map((item, index) => (
                        <Button inverted onClick={() => handleClick(index)} color="green">{item.header}</Button>
                    ))}
                </Button.Group>
            </Grid.Column>
            <Grid.Column verticalAlign="top" width={13}>
                <Transition.Group animation='fade up' duration={500} style={{position: "relative"}}>
                    {picturelist.map((item, index) => (
                        index === tik ? 
                        index === 0 ?
                        <>
                            <Header as="h1" style={{color: "white"}}>Hello there!</Header>
                                <p>
                                    This is a site for my small collection of different kinds of art that I have done.
                                    In here you can find my art that is painted, edited or crafted.
                                </p>
                                <p>
                                    Unfortunately some have been lost or got broken (3d creations) before I have managed to save them to digital format.
                                </p>
                                <p>
                                    However these tiny art projects are my favorites!</p>
                                <p>
                                    Prefer my github? 
                                </p>
                                <Button as="a" inverted href="https://github.com/HeidiJoensuu">Here!</Button> 
                        </>
                        :<List.Item key={item.header} style={{position:"absolute", height: "100%"}}>   
                                <Grid columns={2}>
                                    <Grid.Column width={8}>
                                        <Image src={item.pic} style={{width: "auto", height:"auto", maxHeight: "800px"}} fluid/>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Header as='h1' style={{color: "white"}}>{item.header}</Header>
                                        {art_text(item.text)}
                                    </Grid.Column>
                                </Grid>
                        </List.Item>
                        : <></>
                    ))}
                </Transition.Group>
            </Grid.Column>
        </Grid>
    )
}

export default PictureLibrary