const card = document.querySelector('.profile-card');
        
        card.addEventListener('mousemove', (e) => {
            const x = e.clientX - card.getBoundingClientRect().left;
            const y = e.clientY - card.getBoundingClientRect().top;
            
            card.style.transform = `
                scale(1)
                rotateX(${(y - 150) / 25}deg)
                rotateY(${(x - 160) / -25}deg)
            `;
        });
