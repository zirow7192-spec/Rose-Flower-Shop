-- Sample Data for Rose Flower Shop
-- This file contains example data to populate the database
-- Execute these queries in your Supabase SQL editor to add sample content

-- Sample Gallery Items (Featured Bouquets for Homepage)
INSERT INTO gallery_items (title_el, title_en, description_el, description_en, image_url, category, featured, display_order) VALUES
('Ρομαντικό Μπουκέτο Τριαντάφυλλων', 'Romantic Rose Bouquet', 'Κλασικό μπουκέτο με κόκκινα τριαντάφυλλα', 'Classic bouquet with red roses', 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg', 'bouquets', true, 1),
('Άνοιξη στα Χέρια', 'Spring in Hands', 'Φρέσκο μπουκέτο με εποχιακά λουλούδια', 'Fresh bouquet with seasonal flowers', 'https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg', 'bouquets', true, 2),
('Παστέλ Ομορφιά', 'Pastel Beauty', 'Απαλά χρώματα για κάθε περίσταση', 'Soft colors for any occasion', 'https://images.pexels.com/photos/1070882/pexels-photo-1070882.jpeg', 'bouquets', true, 3),
('Λευκή Κομψότητα', 'White Elegance', 'Καθαρό και κομψό λευκό μπουκέτο', 'Pure and elegant white bouquet', 'https://images.pexels.com/photos/1421890/pexels-photo-1421890.jpeg', 'bouquets', true, 4),
('Πολύχρωμη Χαρά', 'Colorful Joy', 'Ζωντανά χρώματα που φέρνουν χαμόγελο', 'Vibrant colors that bring smiles', 'https://images.pexels.com/photos/1055379/pexels-photo-1055379.jpeg', 'bouquets', true, 5),
('Τροπικό Παράδεισος', 'Tropical Paradise', 'Εξωτικά λουλούδια για ξεχωριστές στιγμές', 'Exotic flowers for special moments', 'https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg', 'bouquets', true, 6);

-- Wedding Gallery Items
INSERT INTO gallery_items (title_el, title_en, description_el, description_en, image_url, category, featured, display_order) VALUES
('Νυφικό Μπουκέτο με Παιώνιες', 'Bridal Bouquet with Peonies', 'Ρομαντικό νυφικό μπουκέτο', 'Romantic bridal bouquet', 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg', 'weddings', false, 10),
('Διακόσμηση Εκκλησίας', 'Church Decoration', 'Κομψός στολισμός εκκλησίας', 'Elegant church decoration', 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg', 'weddings', false, 11),
('Κέντρα Τραπεζιών Δεξίωσης', 'Reception Table Centerpieces', 'Όμορφα κέντρα τραπεζιών', 'Beautiful table centerpieces', 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg', 'weddings', false, 12);

-- Baptism Gallery Items
INSERT INTO gallery_items (title_el, title_en, description_el, description_en, image_url, category, featured, display_order) VALUES
('Λαμπάδα Βάπτισης για Αγόρι', 'Boy Baptism Candle', 'Όμορφα στολισμένη λαμπάδα', 'Beautifully decorated candle', 'https://images.pexels.com/photos/1666069/pexels-photo-1666069.jpeg', 'baptisms', false, 20),
('Διακόσμηση Κολυμβήθρας', 'Font Decoration', 'Λεπτός στολισμός κολυμβήθρας', 'Delicate font decoration', 'https://images.pexels.com/photos/1055379/pexels-photo-1055379.jpeg', 'baptisms', false, 21);

-- Event Gallery Items
INSERT INTO gallery_items (title_el, title_en, description_el, description_en, image_url, category, featured, display_order) VALUES
('Γιορτή Γενεθλίων', 'Birthday Party', 'Χαρούμενη διακόσμηση γενεθλίων', 'Cheerful birthday decoration', 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg', 'events', false, 30),
('Επιχειρηματική Εκδήλωση', 'Corporate Event', 'Επαγγελματική διακόσμηση', 'Professional decoration', 'https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg', 'events', false, 31);

-- Sample Testimonials
INSERT INTO testimonials (name, text_el, text_en, rating, is_active) VALUES
('Μαρία Παπαδοπούλου', 'Η Anna δημιούργησε τον πιο όμορφο γάμο! Κάθε λεπτομέρεια ήταν τέλεια και τα λουλούδια ήταν φρέσκα και υπέροχα. Ευχαριστούμε πολύ!', 'Anna created the most beautiful wedding! Every detail was perfect and the flowers were fresh and gorgeous. Thank you so much!', 5, true),
('Νίκος Καζάκης', 'Εξαιρετική δουλειά στη βάπτιση του γιου μας. Προσωπική εξυπηρέτηση και πολύ όμορφο αποτέλεσμα. Σίγουρα θα την προτείνουμε!', 'Excellent work for our son''s baptism. Personal service and very beautiful result. We will definitely recommend!', 5, true),
('Sofia Dimitriou', 'Very professional and creative! Anna understood exactly what we wanted for our event and delivered beyond expectations. Highly recommended!', 'Πολύ επαγγελματική και δημιουργική! Η Anna κατάλαβε ακριβώς τι θέλαμε για την εκδήλωσή μας και το αποτέλεσμα ξεπέρασε τις προσδοκίες μας!', 5, true);

-- Note: The above queries will populate your database with sample content
-- You can modify the image URLs to use your own photos
-- All image URLs are from Pexels (free stock photos)
-- Replace them with actual photos from Rose Flower Shop for production use

-- To view the data after insertion:
-- SELECT * FROM gallery_items ORDER BY display_order;
-- SELECT * FROM testimonials WHERE is_active = true;
