(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        root.CV_TRANSLATIONS = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    return {
        en: {
            page_title: 'Igor Berezin - CV',
            contacts_label: 'Contacts:',
            photo_alt: 'Igor Berezin',
            full_name: 'Igor Berezin',
            target_roles_label: 'Target roles:',

            expertise_1: 'Backend and full-stack development with a strong focus on scalable web applications and distributed systems',
            expertise_2: 'Design and development of REST APIs, WebSocket-based systems, and microservice-oriented architectures',
            expertise_3: 'Performance optimization, refactoring, debugging, and long-term maintenance of production systems',
            expertise_4: 'Database design, integration, and optimization for both relational and NoSQL storage',
            expertise_5: 'Technical planning, estimation, requirements analysis, and solution design',
            expertise_6: 'Mentoring, code review, and support for engineering team development',
            expertise_7: 'Experience working across product, outsourcing, and fast-changing project environments',
            expertise_8: 'English: Upper-Intermediate',

            doit_time: '01.2020 - present',
            doit_desc_1: '* <b>Reduced logging and monitoring infrastructure costs by approximately $100K annually</b> by re-architecting cluster configuration, optimizing data lifecycle management, index rotation, and ingestion pipelines, and eliminating unnecessary data inputs. Decreased the cluster load by ~80% while improving the stability of critical observability and alerting systems. Owned its administration, including recovering the cluster from a degraded state during high-pressure production conditions.',
            doit_desc_2: '* <b>Spearheaded system stabilization initiatives and Sev1 incident response</b>, driving both reactive fixes and proactive reliability improvements, client impact evaluation and reporting. Designed and implemented a service-level health check system that automatically removed unhealthy instances from service discovery, significantly improving failure isolation and system resilience. Contributed to on-call practices and team-wide incident response strategies.',
            doit_desc_3: '* <b>Led delivery of multiple business-critical projects from concept to production</b>, adapting to evolving requirements and coordinating across teams. Implemented data exchange integrations between internal products, enabling reliable communication across distributed systems.',
            doit_desc_4: '* <b>Designed and implemented system architectures for new services and features</b>, taking ownership from high-level design decisions through to production-ready implementation. Improved overall system performance and scalability across multiple services.',

            koyfin_desc: 'Worked extensively with financial data providers and contributed to the architecture, maintenance, improvement, and debugging of multiple microservices. Optimized application and database performance, with significant work across both PostgreSQL and MongoDB. Implemented data delivery interfaces through REST APIs and WebSocket-based solutions. Also contributed to improving the team development workflow and engineering processes.',

            synergetica_desc: 'Worked as a Full Stack Developer on a shopping-oriented social network project. Contributed to both the main backend (REST API) and the project\'s administrative panel built with the MERN stack. Implemented improvements to frontend architecture and application performance, helped keep the codebase maintainable, and worked extensively with WebSocket-based data exchange for chat-related functionality. Also developed an integration service for synchronizing project data with the WooCommerce REST API, while contributing to refactoring, mentoring, and implementation improvements across the team.',

            pdffiller_desc: 'Worked on a product team with responsibility for developing UI components and applications using React and React-Redux. Also contributed to the backend side of the platform, including a WebSocket server within a microservice-based architecture. Participated in restructuring and refactoring parts of the project, worked extensively with legacy code, implemented new features, fixed defects, and took an active role in code review and mentoring. Gained practical experience working with the Hapi framework as part of the backend stack.',

            glorium_desc: 'Contributed to the development of a CRM system built with the MEAN stack and a microservice-based architecture. Worked with AWS services including EC2, SES, Route 53, and RDS. Implemented integrations with Google services, including SMTP setup and Google APIs. Also developed parsers for websites and unstructured documents, built bots, supported legacy projects, handled refactoring and optimization tasks, configured web servers, communicated with customers, and contributed to mentoring. In addition, developed REST APIs for a mobile client and implemented social authentication features.',

            freelance_company: 'Freelance',
            freelance_desc: 'Worked with several CMS platforms including WordPress, Bitrix, and OpenCart. Delivered layout redesigns, built projects using pure PHP for the backend and HTML5, CSS3, and JavaScript for the frontend, and frequently used jQuery and Bootstrap in day-to-day work. Also worked extensively with SQL databases, fixed layout and business logic issues in existing systems, and supported a custom undocumented framework by investigating and resolving problems in its modules. In addition, worked with Node.js and Angular.js and delivered websites built with the MEAN stack.',

            jsfest_position: 'Co-speaker',
            jsfest_desc: 'Delivered a joint talk about the evolution of the Koyfin project from a monolith MVP to a large microservice-based system. Covered architectural challenges, performance-related optimizations, and the migration path to TypeScript in a growing production environment.',

            edu_university: 'National Aviation University (Kyiv, Ukraine)',
            edu_status: 'Master\'s degree; PhD program attended',
            edu_speciality: 'Cybersecurity',
            edu_desc: 'Studying at the university provided a foundation in information security, including data protection and encryption concepts. It also gave me early experience with object-oriented programming in C++ and C#, relational databases and SQL language, as well as practical familiarity with Linux and command-line environments.',
        },
        ua: {
            page_title: 'Ігор Березін - Резюме',
            contacts_label: 'Контакти:',
            photo_alt: 'Ігор Березін',
            full_name: 'Ігор Березін',
            target_roles_label: 'Цільові позиції:',

            expertise_1: 'Backend та full-stack розробка з фокусом на масштабовані вебзастосунки та розподілені системи',
            expertise_2: 'Проєктування та розробка REST API, систем на базі WebSocket і мікросервісної архітектури',
            expertise_3: 'Оптимізація продуктивності, рефакторинг, дебагінг і довгострокова підтримка production-систем',
            expertise_4: 'Проєктування баз даних, інтеграція та оптимізація реляційних і NoSQL-сховищ',
            expertise_5: 'Технічне планування, оцінка задач, аналіз вимог і проєктування рішень',
            expertise_6: 'Менторинг, code review та розвиток інженерної команди',
            expertise_7: 'Досвід роботи в продуктових, аутсорсингових і динамічних проєктних середовищах',
            expertise_8: 'Англійська: Upper-Intermediate',

            doit_time: '01.2020 - теперішній час',
            doit_desc_1: '* <b>Зменшив витрати на інфраструктуру логування та моніторингу приблизно на $100K на рік</b>, переархітектуривши конфігурацію кластера, оптимізувавши життєвий цикл даних, ротацію індексів та ingestion-пайплайни, а також усунувши зайві джерела даних. Зменшив навантаження на кластер приблизно на 80%, покращивши стабільність критичних систем моніторингу та алертингу. Відповідав за адміністрування, включаючи відновлення кластера з деградованого стану під час критичних production-інцидентів.',
            doit_desc_2: '* <b>Очолював ініціативи зі стабілізації систем і реагування на Sev1-інциденти</b>, розробляючи як реактивні, так і проактивні рішення, оцінюючи вплив на клієнтів і готуючи звітність. Спроєктував і реалізував систему health-check на рівні сервісів, яка автоматично виводила проблемні інстанси з service discovery, значно покращивши ізоляцію збоїв і стійкість системи. Брав участь в on-call і формуванні командних стратегій реагування на інциденти.',
            doit_desc_3: '* <b>Керував розробкою бізнес-критичних проєктів від концепції до production</b>, адаптуючись до змін вимог і координуючи роботу між командами. Реалізував інтеграції обміну даними між внутрішніми продуктами компанії, забезпечивши надійну взаємодію між розподіленими системами.',
            doit_desc_4: '* <b>Проєктував і впроваджував архітектуру систем для нових сервісів і функціоналу</b>, беручи відповідальність від високорівневого дизайну до production-реалізації. Покращив продуктивність і масштабованість кількох сервісів.',

            koyfin_desc: 'Працював із провайдерами фінансових даних та брав участь у проєктуванні, підтримці, розвитку й дебагінгу кількох мікросервісів. Оптимізував продуктивність застосунків і баз даних, активно працюючи з PostgreSQL та MongoDB. Реалізував інтерфейси передачі даних через REST API та рішення на базі WebSocket. Також долучався до покращення процесів розробки в команді.',

            synergetica_desc: 'Працював як Full Stack Developer над проєктом соціальної мережі для e-commerce. Долучався до розробки основного бекенду (REST API) та адміністративної панелі на MERN-стеку. Впроваджував покращення архітектури фронтенду та продуктивності застосунку, допомагав підтримувати кодову базу в належному стані, активно працював із WebSocket-обміном даними для функціоналу чату. Також розробив інтеграційний сервіс для синхронізації даних із WooCommerce REST API, долучаючись до рефакторингу, менторингу та покращення процесів у команді.',

            pdffiller_desc: 'Працював у продуктовій команді, відповідаючи за розробку UI-компонентів і застосунків на React і React-Redux. Також долучався до бекенд-частини платформи, включаючи WebSocket-сервер у мікросервісній архітектурі. Брав участь у реструктуризації та рефакторингу частин проєкту, активно працював із legacy-кодом, впроваджував нові функції, виправляв дефекти та брав участь у code review і менторингу. Отримав практичний досвід роботи з фреймворком Hapi як частиною бекенд-стеку.',

            glorium_desc: 'Долучався до розробки CRM-системи на MEAN-стеку з мікросервісною архітектурою. Працював із AWS-сервісами, включаючи EC2, SES, Route 53 та RDS. Впроваджував інтеграції з сервісами Google, зокрема налаштування SMTP та роботу з Google API. Також розробляв парсери для вебсайтів і неструктурованих документів, створював ботів, підтримував legacy-проєкти, займався рефакторингом і оптимізацією, налаштовував вебсервери, комунікував із клієнтами та долучався до менторингу. Крім того, розробляв REST API для мобільного клієнта та впроваджував функції соціальної автентифікації.',

            freelance_company: 'Фріланс',
            freelance_desc: 'Працював із CMS-платформами, включаючи WordPress, Bitrix та OpenCart. Виконував редизайн верстки, розробляв проєкти на чистому PHP для бекенду та HTML5, CSS3 і JavaScript для фронтенду, часто використовував jQuery і Bootstrap у повсякденній роботі. Також активно працював із SQL-базами даних, виправляв проблеми верстки та бізнес-логіки в існуючих системах і підтримував кастомний недокументований фреймворк, досліджуючи та виправляючи проблеми в його модулях. Крім того, працював із Node.js та Angular.js і створював вебпроєкти на MEAN-стеку.',

            jsfest_position: 'Співдоповідач',
            jsfest_desc: 'Провів спільну доповідь про еволюцію проєкту Koyfin від монолітного MVP до масштабної мікросервісної системи. Розглянув архітектурні виклики, оптимізацію продуктивності та процес переходу на TypeScript у зростаючому production-середовищі.',

            edu_university: 'Національний авіаційний університет (Київ, Україна)',
            edu_status: 'Магістр; навчання в аспірантурі',
            edu_speciality: 'Кібербезпека',
            edu_desc: 'Навчання в університеті дало базу в інформаційній безпеці, включаючи захист даних і криптографію. Також отримав ранній досвід об\'єктно-орієнтованого програмування на C++ і C#, роботи з реляційними базами даних і SQL, а також практичний досвід роботи з Linux і командним рядком.',
        },
    };
}));
