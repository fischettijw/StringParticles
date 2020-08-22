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
    particle.addStringToParticles(particles);
    particle.draw();
    // particle.addStringToParticles(particles.slice(index));    more efficient
};

class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(random(-2, 2), random(-2, 2));
        this.size = 10;
        this.particleColor = 'yellow';
        this.particleColor = color(random(255), random(255), random(255));
    }

    update() {
        this.pos.add(this.vel);
        this.edges();
    }

    draw() {
        noStroke();
        fill(this.particleColor);
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

    addStringToParticles(particles) {
        let maxStringLenght = 100;
        let lineColor = 'red';
        particles.forEach(particle => {
            let d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            if (d < maxStringLenght) {
                stroke(this.particleColor);
                // stroke(lineColor);
                strokeWeight(1);
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
                // this.draw();
            }
        });
    }

}