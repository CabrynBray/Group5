export let reviews = [
    { 
        product_id: 1,
        reviewer_name: 'Alice Smith', 
        review_text: 'Beautiful craftsmanship! I love this piece.',
        rating: 4.5,
        review_date:'2024-07-17 10:30:00',
    },
    { 
        product_id: 2,
        reviewer_name: 'Bob Johnson', 
        review_text: 'Great communication with the seller. Fast shipping too.',
        rating: 5.0,
        review_date: '2024-07-16 15:45:00',
    },
    { 
        product_id: 1,
        reviewer_name: 'Eve Brown', 
        review_text: 'The item arrived damaged, but the seller promptly sent a replacement.',
        rating: 3.5,
        review_date: '2024-07-15 09:00:00',
    },
    { 
        product_id: 1,
        reviewer_name: 'Grace Lee', 
        review_text: 'Exactly as described. Very happy with my purchase!',
        rating: 4.0,
        review_date:'2024-07-14 12:00:00',
    },
    { 
        product_id: 1,
        reviewer_name: 'Daniel Wilson', 
        review_text: 'Highly recommend! Quality craftsmanship and excellent service.',
        rating: 5.0,
        review_date: '2024-07-13 17:30:00',
    },
];

export const addReview = (newReview) => {
    reviews = [...reviews, newReview];
};