// /* SKILL CARD*/
// const boxes = gsap.utils.toArray('.skill-card-img')
// boxes.forEach((box, i) => {
  
//     console.log(i)
//     ScrollTrigger.create({
//         trigger: box,
//         start: 'top bottom',
//         end :'bottom top',
//         toggleClass: 'inView'
//     })
  
// })
// document.querySelector('.bg-pvp').addEventListener('mouseenter', animateCard)
// function animateCard(){
//     gsap.set('.skill-card-img.inView', { clearProps: "transform" })  
//     gsap.to('.skill-card-img.inView', {transform: "rotate3d(1, -22, -1, -30deg)",duration: 1})
// }



/*PVP ARENA*/
gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: "#vs-svg",
        start: "top center",
        end: "bottom center",
        scrub: 2,
    }
});
tl.fromTo('#V',{x:39,y:10}, {duration: 1,x:18,y:60}, 0);
tl.fromTo('#S',{x:66,y:200}, {duration: 1,x:66,y:150}, 0);

/*ENEMIES*/
var tl_enemies = gsap.timeline({
    scrollTrigger:{
        trigger: "#combat-enemies",
        start: "top center",
        end: "center center",
        scrub: 4,
        ease: "power3.in"
    }
});

tl_enemies.fromTo('#enemy_armored_zombie',{x:1000},{duration: 1,x:820,},0);
tl_enemies.fromTo('#enemy_tree',{x:1200},{duration: 1,x:920,},0);
tl_enemies.fromTo('#enemy_stone',{x:1200},{duration: 1,x:650,},0);
tl_enemies.fromTo('#enemy_zombie_wolf',{x:1200},{duration: 1,x:800,},0);

tl_enemies.fromTo('#kid_hero',{x:100},{duration: 1,x:370,},0);
tl_enemies.fromTo('#teen_hero',{x:-200},{duration: 1,x:250,},0);
tl_enemies.fromTo('#exclusive_hero',{x:-220},{duration: 1,x:130,},0);


/*WORLD*/
var tl_world = gsap.timeline({
    scrollTrigger:{
        trigger: "#toad-world",
        start: "top center",
        end: "center center",
        scrub: 4,
        // ease: "power3.in"
    }
});
tl_world.fromTo('#Toad_card',{x:3000},{duration: 1,x:2000,},0);
// tl_world.to('#Group_1679',{duration: 1,y:0,ease:Bounce.easeOut},0);

/*HERO*/
var tl_hero = gsap.timeline({
    scrollTrigger:{
        trigger: ".hero-section",
        start: "top bottom",
        end: "center center",
        scrub: 4,
        // ease: "power3.in"
    }   
});
tl_hero.fromTo('#Image_49-2',{scale: 0.5},{duration: 0.5,scale:1,},0);
tl_hero.fromTo('#Image_49',{scaleX: 0.5},{duration: 0.5,scaleX:1,},0);
tl_hero.fromTo('#Image_50',{scaleX: 0.5},{duration: 0.5,scaleX:1,},0);
tl_hero.fromTo('#Image_51',{scaleX: 0.5},{duration: 0.5,scaleX:1,},0);
tl_hero.fromTo('#Image_52',{scale: 0.5},{duration: 0.5,scale:1,},0);


/*TURN*/
var tl_combat = gsap.timeline({
    scrollTrigger:{
        trigger: "#bg-turn",
        start: "top bottom",
        end: "center center",
        scrub: 4,
        ease: "power3.in"
    }
});
tl_combat.fromTo('#background_tree_left',{scale: 2},{scale:1,},0);
tl_combat.fromTo('#background_tree_right',{scale: 2},{scale:1,},0);
tl_combat.fromTo("#front_tree_right",{scaleX:1.2},{scaleX:1,},0);
tl_combat.fromTo("#front_tree_left",{scaleX:1.2},{scaleX:1,},0);

var tl_cloud = gsap.timeline({
    scrollTrigger:{
        trigger: "#bg-turn",
        start: "top bottom",
        // end: "center center",
        scrub: 4,
        ease: "power3.in"
    } 
});

tl_cloud.fromTo('#Image_53', {x:-220},{duration: 1,x:500,},0);
tl_cloud.fromTo('#Image_54', {x:3000},{duration: 1,x:1700,},0);
tl_cloud.fromTo('#Image_55', {x:1300},{duration: 1,x:1600,},0);
tl_cloud.fromTo('#Image_56', {x:800},{duration: 1,x:1500,},0);

/*ENEMIES CHALLENGE*/
var tl_challenge = gsap.timeline({
    scrollTrigger:{
        trigger: "#bg-challenge",
        start: "top bottom",
        end: "center center",
        scrub: 4,
        ease: "power3.in"
    }
});
tl_challenge.fromTo('#wood_enemies', {x:-220},{duration: 2,x:800,},0);
tl_challenge.fromTo('#dread_trista', {x:2000},{duration: 2,x:1600,},0);


/*PVP*/
var tl_pvp = gsap.timeline({
    scrollTrigger:{
        trigger: "#card-wrap",
        start: "top bottom",
        end: "center center",
        scrub: 4,
        ease: "power3.in"
    }
});
tl_pvp.fromTo('#clouds_1',{x:2000},{duration: 2,x:1800,},0);
tl_pvp.fromTo('#clouds_1-2',{x:200},{duration: 2,x:1000,},0);
tl_pvp.fromTo('#clouds_1-3',{x:-100},{duration: 2,x:100,},0);
tl_pvp.fromTo('#clouds_1-4',{x:200},{duration: 2,x:500,},0);
tl_pvp.fromTo('#clouds_1-5',{x:1000},{duration: 2,x:1200,},0);
tl_pvp.fromTo('#clouds_1-6',{x:2500},{duration: 2,x:2100,},0);


var tl_pte = gsap.timeline({
    scrollTrigger:{
        trigger: "#Image_20",
        start: "top bottom",
        end: "center center",
        scrub: 4,
        ease: "power3.in"
    }
});

tl_pte.fromTo('#PLAY_TO_EARN',{x:4000},{duration: 2,x:2600,},0);
tl_pte.fromTo('#Play_daily',{x:4000},{duration: 2,x:2600,},0.5);

/*WEAPON*/

var tl_weapon = gsap.timeline({
    scrollTrigger:{
        trigger: "#weapon-title",
        start: "top bottom",
        end: "center center",
        scrub: 4,
        ease: "power3.in"
    }
});

tl_weapon.fromTo('#Image_35',{x:100},{duration: 1,x:650,},0 );

