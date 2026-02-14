function startAnimation() {
    document.getElementById('intro-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');

    const tree = document.getElementById('tree');
    // Updated Lavender Palette
    const colors = ['#7b2cbf', '#9d4edd', '#c8b6ff', '#e0aaff'];
    const heartCount = 240; 

    const rect = tree.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // 1. Create Branches (Video-style structure)
    const branchConfigs = [
        { angle: -25, height: 90, delay: 1, bottom: "90px" },
        { angle: 25, height: 90, delay: 1.2, bottom: "90px" },
        { angle: -50, height: 70, delay: 1.5, bottom: "130px" },
        { angle: 50, height: 70, delay: 1.7, bottom: "130px" }
    ];

    branchConfigs.forEach(cfg => {
        const branch = document.createElement('div');
        branch.classList.add('branch');
        branch.style.setProperty('--h', `${cfg.height}px`);
        branch.style.bottom = cfg.bottom; 
        branch.style.transform = `translateX(-50%) rotate(${cfg.angle}deg)`;
        branch.style.animationDelay = `${cfg.delay}s`;
        tree.appendChild(branch);
    });

    // 2. Create Heart Bloom (Solid shape)
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        const t = Math.random() * 2 * Math.PI;
        const r = Math.sqrt(Math.random()); 
        let x = 16 * Math.pow(Math.sin(t), 3);
        let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

        x *= r; y *= r;

        const scale = window.innerWidth < 768 ? 7 : 10; 
        const posX = (x * scale) + centerX;
        const posY = centerY - (y * scale) - 35;

        heart.style.left = `${posX}px`;
        heart.style.top = `${posY}px`;
        heart.style.animationDelay = `${(Math.random() * 3) + 2.8}s`;

        tree.appendChild(heart);
    }
}