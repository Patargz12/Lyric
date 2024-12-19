import { ref, computed } from 'vue';

export function useCarousel(slides: any[], autoplayInterval = 5000) {
    const slideWidth = 280;
    const slideGap = 40;
    const currentSlideIndex = ref(2); // Start from the 3rd image
    const isTransitioning = ref(false);
    let autoplayTimer: NodeJS.Timer | null = null;

    // Calculate the number of slides to show on each side of the active slide
    const slidesToShow = 2;

    const getVisibleSlides = computed(() => {
        const result = [];
        const totalSlides = slides.length;

        for (let i = -slidesToShow; i <= slidesToShow; i++) {
            const index = ((currentSlideIndex.value + i) % totalSlides + totalSlides) % totalSlides;
            result.push({ ...slides[index], originalIndex: index });
        }

        return result;
    });

    const isActiveSlide = (index: number) => {
        return index === slidesToShow;
    };

    const calculateShortestPath = (current: number, target: number, total: number) => {
        const diff = target - current;
        const wrap = total - Math.abs(diff);

        if (Math.abs(diff) <= wrap) {
            return diff;
        }
        return diff > 0 ? -wrap : wrap;
    };

    const handleSlideClick = (index: number) => {
        if (isTransitioning.value) return;

        const targetIndex = getVisibleSlides.value[index].originalIndex;
        const path = calculateShortestPath(
            currentSlideIndex.value,
            targetIndex,
            slides.length
        );

        isTransitioning.value = true;

        // Animate through intermediate slides
        let step = 0;
        const totalSteps = Math.abs(path);
        const animate = () => {
            if (step < totalSteps) {
                step++;
                currentSlideIndex.value = ((currentSlideIndex.value + Math.sign(path)) + slides.length) % slides.length;
                requestAnimationFrame(() => setTimeout(animate, 150)); // Adjust delay for smoothness
            } else {
                isTransitioning.value = false;
            }
        };

        animate();
        resetAutoplay();
    };

    const nextSlide = () => {
        if (isTransitioning.value) return;
        isTransitioning.value = true;
        currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.length;
        setTimeout(() => {
            isTransitioning.value = false;
        }, 700);
        resetAutoplay();
    };

    const handleTransitionEnd = () => {
        isTransitioning.value = false;
    };

    const getTranslateX = computed(() => {
        const totalWidth = slideWidth + slideGap;
        const centeringOffset = (window.innerWidth - slideWidth) / 2;
        return centeringOffset - (slidesToShow * totalWidth);
    });

    const startAutoplay = () => {
        if (autoplayTimer) clearInterval(autoplayTimer);
        autoplayTimer = setInterval(nextSlide, autoplayInterval);
    };

    const resetAutoplay = () => {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
            startAutoplay();
        }
    };

    return {
        slideWidth,
        slideGap,
        currentSlideIndex,
        isTransitioning,
        isActiveSlide,
        handleSlideClick,
        handleTransitionEnd,
        getTranslateX,
        startAutoplay,
        resetAutoplay,
        getVisibleSlides
    };
}