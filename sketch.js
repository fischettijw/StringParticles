let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    let numOfParticles = 100;
    for (let i = 0; i < numOfParticles; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    background('black');
    particles.forEach(drawParticle);
}

function drawParticle(particle, index, particles) {
    particle.update();
    particle.draw();
    particle.addStringToParticles(particles.slice(index));
};

class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(random(-2, 2), random(-2, 2));
        this.size = 10;
        this.clr = 'white';
    }

    update() {
        this.pos.add(this.vel);
        this.edges();
    }

    draw() {
        noStroke();
        fill(this.clr);
        circle(this.pos.x, this.pos.y, this.size);
    }

    edges() {
        if (this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1;
        }

        if (this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
        }
    }

    // addStringToParticles(particles) {
    //     let maxStringLenght = 100;
    //     particles.forEach(checkDistance);

    //     function checkDistance(particle, index, particles) {

    //         let d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
    //         if (d < maxStringLenght) {
    //             this.clr = 'yellow';
    //             stroke(this.clr);
    //             strokeWeight(1);
    //             line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
    //         }
    //     };
    // }

    addStringToParticles(particles) {
        let maxStringLenght = 150;
        particles.forEach(particle => {
            let d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            if (d < maxStringLenght) {
                stroke(255, 0, 0);
                strokeWeight(1);
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
            }
        });
    }

}