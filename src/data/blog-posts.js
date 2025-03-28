export const blogPostsData = [
    {
        title: "🧮 Energy transition or addition ?", 
        link:"https://seagnal.substack.com/p/energy-transition-or-addition",
        date: "03/07/24",
    }, 
    {
        title: "♻️ Recycling solar panels", 
        link:"https://seagnal.substack.com/p/recycling-solar-panels",
        date: "03/07/24",
    }, 
    {
        title: "🌪️ Natural Disasters and Climate", 
        link:"https://seagnal.substack.com/p/disasters-and-climate",
        date: "26/06/24",
    }, 
    {
        title: "🚀 Hydrogen, fuel of the future ? Part 2", 
        link:"https://seagnal.substack.com/p/hydrogen-fuel-of-the-future-part",
        date: "18/06/24",
    }, 
    {
        title: "🚀 Hydrogen, fuel of the future ? Part 1", 
        link:"https://seagnal.substack.com/p/hydrogen-fuel-of-the-future",
        date: "11/06/24",
    }, 
    {
        title: "🐾 Biodiversity and Climate", 
        link:"https://seagnal.substack.com/p/biodiversity-and-climate",
        date: "04/06/24",
    }, 
    {
        title: "🔌 Connecting grids across continents", 
        link:"https://seagnal.substack.com/p/connecting-grids-across-continents",
        date: "28/05/24",
    }, 
    {
        title: "🕵️‍♀️ Energy Transition & Deglobalisation", 
        link:"https://seagnal.substack.com/p/energy-transition-and-deglobalisation",
        date: "21/05/24",
    }, 
    {
        title: "💻 Sustainable digital technologies", 
        link:"https://seagnal.substack.com/p/sustainable-digital-technologies",
        date: "14/05/24",
    }, 
    {
        title: "🔋 Batteries on sale", 
        link: "https://seagnal.substack.com/p/batteries-on-sale",
        date: "07/05/24",
    }, 
    {
        title: " ⚡ Decentralized Energy Networks", 
        link:"https://seagnal.substack.com/p/decentralization-of-energy-networks",
        date: "30/04/24",
    }, 
    {
        title: "🏭 Manufacturing Wars", 
        link:"https://seagnal.substack.com/p/manufacturing-wars",
        date: "23/04/24",
    }, 
    {
        title: "💡 Energy Transition", 
        link:"https://seagnal.substack.com/p/energy-transition",
        date: "16/04/24",
    }, 
    {
        title: "🌡️ Breaking temperature records", 
        link:"https://seagnal.substack.com/p/breaking-temperature-records",
        date: "09/04/24",
    }, 
    {
        title: "60% of the world now uses smartphones", 
        link:"https://seagnal.substack.com/p/60-of-the-world-now-uses-smartphones",
        date: "02/04/24",
    }, 
    {
        title: "AI Algorithms", 
        link:"https://seagnal.substack.com/p/beyond-human-the-evolution-of-ai",
        date: "26/03/24",
    }, 
    {
        title: "Solar modules cheaper than fences", 
        link:"https://open.substack.com/pub/seagnal/p/seagnal-2-solar-modules-cheaper-than?r=2nofy3&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
        date: "19/03/24",
    }, 
    {
        title: "Powering AI with clean energy", 
        link:"https://open.substack.com/pub/seagnal/p/seagnal-1-powering-ai-with-clean?r=2nofy3&utm_campaign=post&utm_medium=web",
        date: "12/03/24",
    }, 
    {
        title: "WattWars: Making an energy transition game in 1 month #1",
        full_text: `
       <p>So I decided to develop a video game! Embarking on this artistic journey is an exhilarating adventure I&#39;m eager to share with you in this blog post, where we will dive into the project&#39;s backstory, see early prototypes, and shed light on the game development process, including innovative AI workflows.</p><p><strong>Some context and background before we get gaming:</strong></p><p>Currently on a gap year, I am both trying out some side project ideas I have accumulated over the years and travelling the world from Australia to Europe. I spent the first 3 months working on a collaborative social media platform idea, Riples. But soon I realised that I wasn&rsquo;t passionate enough about that industry, and as I was winding down that project I realised that I wanted something challenging, closer to my passions, and where I could learn new skills.</p><p> And that&rsquo;s when the idea of making games about sustainability came about, hitting the sweet spot I had been searching for: a blend of innovation, learning, and purpose.</p><p><strong>A bit about game development and how I am going about it:</strong></p><p>You might not be aware, but the journey of creating a video game by yourself, known in the industry as indie game development, is actually pretty hard. Not only do you need, as a single person, to come up with the mechanics of the game, but there is also the coding, visual arts,&nbsp;soundscapes,&nbsp;and marketing. To top it off, you are competing against the big studios blockbuster games such as Assassin&rsquo;s creed, League of Legends, or GTA (also called AAA, pronounced &ldquo;triple-A&rdquo;, games), and a horde of other super talented indie developers.</p><p>Not being a talented artist, nor having much experience with game development (though I have played a lot in the past), I need a good strategy to compete with these talented folks. The strategy I'm going with is to explore the niche of educational games, utilizing my expertise in teaching and knowledge of sustainability to distinguish myself from other game developers. But, before getting started, I needed to set some rules for myself, as to not get lost in the void of video game making and come back a year later with nothing to show for it. So the 3 simple rules for this first game are:</p><ol>	<li>Develop a playable prototype in a month, and assess engagement from it.</li>	<li>Innovate only on the educational aspect, copy a lot for the rest.</li>	<li>Among the new skills, focus most on marketing (partly because it is a big weakness of mine but also the most transferable skill).</li></ol><p><strong>The first iteration:</strong></p><p>At first I had to decide on an existing game genre that would lend itself well to the energy transition theme a subject I'm familiar with as a solar engineer. After brainstorming with ChatGPT, the tower defense genre emerged as a good choice for its simplicity and potential for engaging gameplay, and we settled on the name "WattWars". Drawing inspiration from the iconic Plants vs. Zombies tower defense game, in WattWars you will battle against power-hungry appliances in a quest for energy transition. <div style="display: flex; justify-content: space-around; align-items: center;">  <img src="https://t3-portofolio.s3.us-east-2.amazonaws.com/blog/wattwars-1/ww-1-1.png" /> </div><p><em>Example of a popular tower defense game, Plant vs Zombies, where the towers are plants and enemies zombies attacking your house. A great source of inspiration.&nbsp;</em></p><p>After nailing down the concept and researching similar games, I got started following a Unity tower defense tutorial. In parallel,&nbsp;I started making my own art with DALL-E (OpenAI&#39;s text to image AI) for the tutorial. Fine-tuning prompts to capture a desired style was entertaining, though I quickly realized DALL-E&#39;s limitations with pixel art. I tried several AI alternatives, including mid-journey, yet none significantly outperformed the others at pixel art. Ultimately, I ended with workflow that combined AI-generated art and manual pixel art techniques:</p><ol>	<li>Using specific prompts&nbsp;to define the art style to DALL-E, and asking for a few variations.</li>	<li>Importing the good result(s) into a pixel art software, Piskel.</li>	<li>In Piskel, selecting the most compelling elements, refining them, and erasing any backgrounds to achieve a polished look.</li></ol><p>This workflow not only bypasses some intricacies of pixel art, such as dithering and shading, but also leverages&nbsp;the Piskel capability to animate. Indeed, animating with AI would be harder as the models rapidly lose context (ie change styles) and don&#39;t have a grasp of physics (the recent sora-2 was some of the first successful attempt but it&#39;s not available commercially).</p><div style="display: flex; justify-content: space-around; align-items: center;">    <img src="https://t3-portofolio.s3.us-east-2.amazonaws.com/blog/wattwars-1/ww-1-2.png" style="height:400px; width:600px" />    <img src="https://t3-portofolio.s3.us-east-2.amazonaws.com/blog/wattwars-1/FrigidAir.gif" style="height:200px; width:200px" /></div><p><em>Examples of art created using the workflow. Animating was super fun and you should have seen me walking around the coworking space trying to figure out how the legs move when we are walking !</em></p><p>To sum it up, getting familiar with unity and figuring out a nice AI pixel art workflow, the main goals for this first week of development (#1/#4), were achieved. So I spent the rest of the time getting other mechanics of tower defense game set-up in unity, playing with sounds and dialogues, and you can find below a quick demo of where I have gotten to:&nbsp;</p><p>&nbsp;</p>
       <div style="display: flex; justify-content: center;"> <iframe width="560" height="315" src="https://www.youtube.com/embed/LkNf6MOu-Rw?si=NQDePpFl7FZYcrcl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div> <div style="margin-top:20px"> You can check it out  <a href="https://www.cool-down.io/" style="color: blue; text-decoration: underline;"> here </a>`, 
       date: "10/03/24",
    }, 
]