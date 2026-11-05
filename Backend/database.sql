-- NSCET College Website Database Schema
-- Compatible with MySQL 5.7+ / MySQL 8.0+ / MariaDB

SET FOREIGN_KEY_CHECKS = 0;

-- 1. Admins Table
CREATE TABLE IF NOT EXISTS `admins` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(100) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT IGNORE INTO `admins` (`id`, `username`, `password`) VALUES
(1, 'nscet', 'nscet9210'),
(2, 'admin', 'admin');

-- 2. Form Enquiries Table (Admission / Contact Portal)
CREATE TABLE IF NOT EXISTS `form_enquiries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `fullName` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `mobile` VARCHAR(50) NOT NULL,
  `whatsapp` VARCHAR(50) DEFAULT NULL,
  `city` VARCHAR(150) DEFAULT NULL,
  `subject` VARCHAR(255) DEFAULT NULL,
  `message` TEXT,
  `is_read` TINYINT(1) DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Staff Table
CREATE TABLE IF NOT EXISTS `staff` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `designation` VARCHAR(255) DEFAULT NULL,
  `department` VARCHAR(255) DEFAULT NULL,
  `photo_url` VARCHAR(500) DEFAULT NULL,
  `email` VARCHAR(255) DEFAULT NULL,
  `qualifications` TEXT,
  `research` TEXT,
  `is_hod` TINYINT(1) DEFAULT 0,
  `about` TEXT,
  `linkedin` VARCHAR(500) DEFAULT NULL,
  `spec` TEXT,
  `experience` TEXT,
  `publications` TEXT,
  `projects` TEXT,
  `patents` TEXT,
  `awards` TEXT,
  `profile_url` VARCHAR(500) DEFAULT NULL,
  `profile_pdf` VARCHAR(500) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Events Table
CREATE TABLE IF NOT EXISTS `events` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) DEFAULT NULL,
  `description` TEXT,
  `department` VARCHAR(100) DEFAULT NULL,
  `date` VARCHAR(50) DEFAULT NULL,
  `image_url` VARCHAR(500) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 5. Event Photos Table
CREATE TABLE IF NOT EXISTS `event_photos` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `event_id` INT NOT NULL,
  `photo_url` VARCHAR(500) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 6. Departments Table
CREATE TABLE IF NOT EXISTS `departments` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `photo_url` VARCHAR(500) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 7. Home Marquee Table
CREATE TABLE IF NOT EXISTS `home_marquee` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `content` TEXT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 8. Home Marquee Settings Table
CREATE TABLE IF NOT EXISTS `home_marquee_settings` (
  `id` INT PRIMARY KEY,
  `speed_mode` VARCHAR(50) DEFAULT 'slow',
  `speed_seconds` INT DEFAULT 35
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT IGNORE INTO `home_marquee_settings` (`id`, `speed_mode`, `speed_seconds`) VALUES
(1, 'slow', 35);

-- 9. Home Hero Table
CREATE TABLE IF NOT EXISTS `home_hero` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `heading` VARCHAR(255) DEFAULT NULL,
  `sub_heading` VARCHAR(255) DEFAULT NULL,
  `paragraph` TEXT,
  `button_name` VARCHAR(100) DEFAULT NULL,
  `url` VARCHAR(500) DEFAULT NULL,
  `photo_url` VARCHAR(500) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 10. Home Timer Table
CREATE TABLE IF NOT EXISTS `home_timer` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `event_name` VARCHAR(255) DEFAULT NULL,
  `target_date` VARCHAR(100) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 11. Home Centre of Excellence (COE) Table
CREATE TABLE IF NOT EXISTS `home_coe` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) DEFAULT NULL,
  `highlight` VARCHAR(255) DEFAULT NULL,
  `description` TEXT,
  `photo_url` VARCHAR(500) DEFAULT NULL,
  `photo_url2` VARCHAR(500) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 12. Home Featured News Table
CREATE TABLE IF NOT EXISTS `home_featured_news` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `tag` VARCHAR(100) DEFAULT NULL,
  `title` VARCHAR(255) DEFAULT NULL,
  `description` TEXT,
  `news_date` VARCHAR(50) DEFAULT NULL,
  `photo_url` VARCHAR(500) DEFAULT NULL,
  `link_url` VARCHAR(500) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 13. Home Notice Board Table
CREATE TABLE IF NOT EXISTS `home_notice_board` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) DEFAULT NULL,
  `date` VARCHAR(50) DEFAULT NULL,
  `type` VARCHAR(50) DEFAULT NULL,
  `link_url` VARCHAR(500) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 14. Home News Table
CREATE TABLE IF NOT EXISTS `home_news` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) DEFAULT NULL,
  `date` VARCHAR(50) DEFAULT NULL,
  `content` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 15. Home Announcement Table
CREATE TABLE IF NOT EXISTS `home_announcement` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `photo_url` VARCHAR(500) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 16. Home Image Section Table
CREATE TABLE IF NOT EXISTS `home_image` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `caption` VARCHAR(255) DEFAULT NULL,
  `photo_url` VARCHAR(500) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 17. Home Principal Table
CREATE TABLE IF NOT EXISTS `home_principal` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) DEFAULT NULL,
  `message` TEXT,
  `photo_url` VARCHAR(500) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 18. Home UG Course Table
CREATE TABLE IF NOT EXISTS `home_ug_course` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `course_name` VARCHAR(255) DEFAULT NULL,
  `description` TEXT,
  `photo_url` VARCHAR(500) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 19. Home PG Course Table
CREATE TABLE IF NOT EXISTS `home_pg_course` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `course_name` VARCHAR(255) DEFAULT NULL,
  `description` TEXT,
  `photo_url` VARCHAR(500) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 20. Home Counter Table
CREATE TABLE IF NOT EXISTS `home_counter` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) DEFAULT NULL,
  `count_value` VARCHAR(100) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 21. Home Recruiter Table
CREATE TABLE IF NOT EXISTS `home_recruiter` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `company_name` VARCHAR(255) DEFAULT NULL,
  `logo_url` VARCHAR(500) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 22. Home Recruiter Settings Table
CREATE TABLE IF NOT EXISTS `home_recruiter_settings` (
  `id` INT PRIMARY KEY,
  `title_prefix` VARCHAR(100) DEFAULT 'OUR',
  `title_highlight` VARCHAR(100) DEFAULT 'INDUSTRY CONNECT',
  `subtitle` TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT IGNORE INTO `home_recruiter_settings` (`id`, `title_prefix`, `title_highlight`, `subtitle`) VALUES
(1, 'OUR', 'INDUSTRY CONNECT', 'A strong network of organizations shaping our students’ careers.');

-- 23. Home Reviews (Testimonials) Table
CREATE TABLE IF NOT EXISTS `home_reviews` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) DEFAULT NULL,
  `batch` VARCHAR(100) DEFAULT NULL,
  `company` VARCHAR(255) DEFAULT NULL,
  `role` VARCHAR(255) DEFAULT NULL,
  `package` VARCHAR(100) DEFAULT NULL,
  `rating` INT DEFAULT 5,
  `image_url` VARCHAR(500) DEFAULT NULL,
  `review` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 24. Home Reviews Settings Table
CREATE TABLE IF NOT EXISTS `home_reviews_settings` (
  `id` INT PRIMARY KEY,
  `badge` VARCHAR(100) DEFAULT 'PLACEMENT RECORD',
  `title` VARCHAR(255) DEFAULT 'Proven Track Record of Excellence',
  `description` TEXT,
  `stat1_label` VARCHAR(100) DEFAULT 'Placement Rate',
  `stat1_value` VARCHAR(50) DEFAULT '98%',
  `stat2_label` VARCHAR(100) DEFAULT 'Highest Package',
  `stat2_value` VARCHAR(50) DEFAULT '28 LPA',
  `stat3_label` VARCHAR(100) DEFAULT 'Top Recruiters',
  `stat3_value` VARCHAR(50) DEFAULT '60+',
  `stat4_label` VARCHAR(100) DEFAULT 'Total Offers',
  `stat4_value` VARCHAR(50) DEFAULT '200+'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT IGNORE INTO `home_reviews_settings` (
  `id`, `badge`, `title`, `description`,
  `stat1_label`, `stat1_value`,
  `stat2_label`, `stat2_value`,
  `stat3_label`, `stat3_value`,
  `stat4_label`, `stat4_value`
) VALUES (
  1, 'PLACEMENT RECORD', 'Proven Track Record of Excellence',
  'Our campus placements stand as a testament to our quality education, modern lab ecosystem, and industry-oriented syllabus.',
  'Placement Rate', '98%',
  'Highest Package', '28 LPA',
  'Top Recruiters', '60+',
  'Total Offers', '200+'
);

SET FOREIGN_KEY_CHECKS = 1;

