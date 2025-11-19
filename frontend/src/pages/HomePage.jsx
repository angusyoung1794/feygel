import React, { useEffect, useState } from 'react';
import { Sparkles, Lightbulb, Palette, ScrollText, Mic2, Zap, Users, Calendar, Briefcase, PartyPopper } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const HomePage = () => {
  const [showFireworks, setShowFireworks] = useState(true);
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    // Салют при загрузке
    setTimeout(() => setShowFireworks(false), 4000);

    // Конфетти при скролле
    const handleScroll = () => {
      if (Math.random() > 0.95) {
        const newConfetti = Array.from({ length: 5 }, (_, i) => ({
          id: Date.now() + i,
          left: Math.random() * 100,
          delay: Math.random() * 0.5,
        }));
        setConfetti(prev => [...prev, ...newConfetti]);
        setTimeout(() => {
          setConfetti(prev => prev.filter(c => !newConfetti.find(nc => nc.id === c.id)));
        }, 3000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Разработка концепции',
      description: 'Глубокий брифинг, поиск уникальной идеи, которая отразит ваш стиль'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Дизайн и декор',
      description: 'Создание эскизов, подбор материалов, авторское оформление пространства'
    },
    {
      icon: <ScrollText className="w-8 h-8" />,
      title: 'Сценарий и ведущие',
      description: 'Написание индивидуального сценария и подбор профессиональных ведущих'
    },
    {
      icon: <Mic2 className="w-8 h-8" />,
      title: 'Свет, звук, сцена',
      description: 'Профессиональное техническое оснащение для безупречного качества'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Монтаж и демонтаж',
      description: 'Полный цикл работ на площадке. Вы наслаждаетесь праздником, мы решаем все вопросы'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Спецэффекты',
      description: 'Салюты, конфетти, воздушные шары и другие праздничные эффекты'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Вы делитесь мечтой',
      description: 'Опишите нам своё видение праздника'
    },
    {
      number: '02',
      title: 'Мы предлагаем решение',
      description: 'Разрабатываем и согласовываем детали'
    },
    {
      number: '03',
      title: 'Вы получаете готовый праздник',
      description: 'Расслабляетесь и получаете удовольствие в день ивента'
    }
  ];

  const eventTypes = [
    { icon: <PartyPopper className="w-6 h-6" />, title: 'Свадьбы', description: 'Романтичные, современные, тематические' },
    { icon: <Briefcase className="w-6 h-6" />, title: 'Корпоративы', description: 'От тимбилдингов до грандиозных гала-ужинов' },
    { icon: <Sparkles className="w-6 h-6" />, title: 'Презентации', description: 'Яркие и запоминающиеся бизнес-события' },
    { icon: <Calendar className="w-6 h-6" />, title: 'Частные вечеринки', description: 'Дни рождения, юбилеи, тематические вечера' }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      {/* Салют при загрузке */}
      {showFireworks && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="firework"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Падающее конфетти */}
      {confetti.map(item => (
        <div
          key={item.id}
          className="confetti-piece"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`
          }}
        />
      ))}

      {/* Плавающие воздушные шары */}
      <div className="balloons-container">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="balloon"
            style={{
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img 
                src="логотип.jpg" 
                alt="Feygel Event" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-gold bg-clip-text text-transparent">
                FEYGEL EVENT
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Услуги</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors">Как работаем</a>
              <a href="#events" className="text-gray-700 hover:text-purple-600 transition-colors">Мероприятия</a>
              <a href="#host" className="text-gray-700 hover:text-purple-600 transition-colors">Ведущий</a>
              <a href="#contacts" className="text-gray-700 hover:text-purple-600 transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-gold-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-gold bg-clip-text text-transparent">
                Организация мероприятий
              </span>
              <br />
              <span className="text-gray-900">«под ключ»</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              От вашей идеи до безупречной реализации
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
              Мы — ваши персональные продюсеры праздников. Берём на себя всю сложную работу: 
              от генерации концепции до финального монтажа оборудования. Вы получаете готовый результат.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="https://wa.me/79257558584" className="flex items-center">
                  Обсудить ваш праздник
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg">
                <a href="#services">
                  Наши услуги
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Декоративные элементы */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-50 animate-bounce-slow" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gold-200 rounded-full opacity-30 animate-bounce-slow" style={{ animationDelay: '1s' }} />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Наши <span className="bg-gradient-to-r from-purple-600 to-gold bg-clip-text text-transparent">услуги</span>
            </h2>
            <p className="text-xl text-gray-600">Полный спектр организации мероприятий любой сложности</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-300 bg-gradient-to-br from-white to-purple-50"
              >
                <CardContent className="p-8">
                  <div className="mb-6 text-purple-600 group-hover:text-gold transition-colors duration-300 transform group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Как это <span className="text-gold">работает?</span>
            </h2>
            <p className="text-xl text-purple-100">Простой процесс от идеи до реализации</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="mb-6">
                  <span className="text-7xl font-bold text-gold opacity-50">{step.number}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-purple-100 text-lg">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-1 bg-gold" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Мы организуем <span className="bg-gradient-to-r from-purple-600 to-gold bg-clip-text text-transparent">мероприятия</span>
            </h2>
            <p className="text-xl text-gray-600">Любой сложности и масштаба</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((event, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-purple-200 hover:border-gold">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 text-purple-600 group-hover:text-gold transition-colors inline-block transform group-hover:scale-110 duration-300">
                    {event.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{event.title}</h3>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Images Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="свадьма.jpg" 
                alt="Свадьба" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="шарики.jpeg" 
                alt="Воздушные шары" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="флажки.jpg" 
                alt="Декор" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Host Section */}
      <section id="host" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gold-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Ведущий — актёр <span className="bg-gradient-to-r from-purple-600 to-gold bg-clip-text text-transparent">Мелехов</span>
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Придадим вашему мероприятию особый шарм и энергетику. Наш ведущий — актёр Мелехов — это гарантия:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Sparkles className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Харизмы и стиля, которые захватят внимание гостей</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Импровизации и тонкого юмора по ситуации</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Ярких эмоций и динамичного сценария</span>
                </li>
              </ul>
              <p className="text-xl font-semibold text-purple-600 mb-8">
                С Мелеховым ваш праздник станет по-настоящему уникальным шоу!
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="https://wa.me/79257558584" className="text-white">
                  Расскажите нам о вашей мечте
                </a>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <img 
                  src="https://customer-assets.emergentagent.com/job_d188e8db-000d-41c1-9132-bdda2dba90ff/artifacts/hmzhuzwf_%D0%BC%D0%B5%D0%BB%D0%B5%D1%85%D0%BE%D0%B22.webp" 
                  alt="Актёр Мелехов" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы создать <span className="text-gold">незабываемый</span> праздник?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Свяжитесь с нами, и мы воплотим вашу мечту в реальность!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold-600 text-gray-900 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <a href="https://wa.me/79257558584">
                WhatsApp: +7 925 755-85-84
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-6 text-lg">
              <a href="tel:+79257558584">
                Позвонить: +7 925 755-85-84
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://customer-assets.emergentagent.com/job_d188e8db-000d-41c1-9132-bdda2dba90ff/artifacts/aat2wkim_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.jpg" 
                  alt="Feygel Event" 
                  className="h-10 w-10 object-contain"
                />
                <span className="text-xl font-bold text-gold">FEYGEL EVENT</span>
              </div>
              <p className="text-gray-400">Организация мероприятий «под ключ»</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-gold">Контакты</h3>
              <div className="space-y-2">
                <p className="text-gray-300">Телефон: +7 925 755-85-84</p>
                <p className="text-gray-300">
                  <a href="https://wa.me/79257558584" className="hover:text-gold transition-colors">
                    WhatsApp: +7 925 755-85-84
                  </a>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-gold">Социальные сети</h3>
              <a 
                href="https://instagram.com/feygel_event" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors inline-block"
              >
                Instagram: @feygel_event
              </a>
            </div>
          </div>
          
          {/* SEO Description */}
          <div className="border-t border-gray-800 pt-8 pb-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gold mb-4">Feygel Event — Профессиональное ивент-агентство в Москве</h2>
              <div className="text-gray-300 space-y-3 text-sm leading-relaxed">
                <p>
                  <strong className="text-white">Feygel Event Agency</strong> — профессиональное ивент-агентство, специализирующееся на создании ярких мероприятий любого формата. 
                  Мы берём на себя полный цикл организации: разработку концепции, подбор площадки, шоу-программу, оформление, техническое обеспечение, координацию и реализацию в день события.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                  <div>
                    <h3 className="text-gold font-semibold mb-2">Мы создаём:</h3>
                    <ul className="space-y-1 text-gray-400">
                      <li>• Корпоративные мероприятия и тимбилдинги</li>
                      <li>• Свадьбы и семейные торжества</li>
                      <li>• Детские праздники</li>
                      <li>• Конференции, презентации и выставки</li>
                      <li>• Шоу-программы любой сложности</li>
                      <li>• Городские и массовые проекты</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-gold font-semibold mb-2">Техническое обеспечение:</h3>
                    <ul className="space-y-1 text-gray-400">
                      <li>• Аренда звукового оборудования</li>
                      <li>• Аренда светового оборудования</li>
                      <li>• Аренда сцены и конструкций</li>
                      <li>• Спецэффекты (салюты, конфетти)</li>
                      <li>• Оформление воздушными шарами</li>
                      <li>• Праздничный декор</li>
                    </ul>
                  </div>
                </div>
                
                <p>
                  Используем собственную базу артистов, ведущих (включая профессионального актёра Мелехова), диджеев, а также современное оборудование. 
                  Гарантируем качество, креативные решения и эмоциональный эффект, который запомнится надолго.
                </p>
                
                <p className="text-gray-400 italic">
                  <strong className="text-white">Организация мероприятий под ключ в Москве:</strong> полный спектр event-услуг от концепции до реализации. 
                  Свадьбы, корпоративы, детские праздники, конференции — создаём незабываемые события с 2020 года.
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Feygel Event. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;