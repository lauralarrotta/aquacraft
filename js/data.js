// Galeria

const fotos = {
  foto1: {
    nombre: "Piscina Moderna con Acabados en Mármol",
    url: "https://st.hzcdn.com/simgs/a941f9be02f7dd61_14-1313/home-design.jpg",
  },
  foto2: {
    nombre: "Piscina Familiar con Espacios para Niños",
    url: "https://casasinhaus.com/wp-content/uploads/2021/02/casa-lujo-inhaus-sevilla-zona-invitados.jpg",
  },
  foto3: {
    nombre: "Piscina en Forma de Violín",
    url: "https://www.azureazure.com/wp-content/uploads/2014/09/Cipriano-Custom-Swimming-Pools.jpeg",
  },
  foto4: {
    nombre: "Piscina con Cascada Moderna",
    url: "https://www.piscinadecor.com/wp-content/uploads/2022/12/piscina-cascada.jpg",
  },
  foto5: {
    nombre: "Piscina con Vista Panorámica",
    url: "https://planner5d.com/blog/content/images/size/w2000/2024/07/casas.alberca.1.jpg",
  },
  foto6: {
    nombre: "Piscina de Diseño Contemporáneo",
    url: "https://planner5d.com/blog/content/images/size/w1000/2022/02/john-fornander-Id7u0EkTjBE-unsplash.jpg",
  },
  foto7: {
    nombre: "Piscina en Resort de Lujo",
    url: "https://www.hilton.com/im/en/LASCFOL/15879951/lascf-palace-one-pool-exterior-v3.png?impolicy=crop&cw=4500&ch=2882&gravity=NorthWest&xposition=0&yposition=58&rw=1280&rh=820",
  },
  foto8: {
    nombre: "Piscina en Diseño Moderno",
    url: "https://www.acunova.es/wp-content/uploads/2024/07/piscina-bellagio-21-respuestas-que-debes-saber-bellagio-las-vegas-1536x901.jpg",
  },
  foto9: {
    nombre: "Piscina con Vista a la Ciudad",
    url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/9363244.jpg?k=36cffaf18acc24a1fb8a2475bb35652011d4e9f6caa7cb883925f3030bfc65e5&o=&hp=1",
  },
  foto10: {
    nombre: "Piscina Exclusiva en Complejo Turístico",
    url: "https://previews.123rf.com/images/isogood/isogood2007/isogood200700753/150896237-piscina-en-las-vegas-nevada.jpg",
  },
  foto11: {
    nombre: "Piscina en Resort de Alta Gama",
    url: "https://cache.marriott.com/content/dam/marriott-renditions/LASVW/lasvw-pool-0368-hor-clsc.jpg",
  },
  foto12: {
    nombre: "Piscina con Ambiente Relax",
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/8a/63/fa/the-perfect-place-to.jpg?w=1200&h=-1&s=1",
  },
};

// Servicios

const servicios = {
  diseñoPersonalizado: {
    nombre: "Diseño Personalizado",
    descripcion: "Creamos diseños únicos adaptados a tus gustos y necesidades.",
    icono: "fa-pencil",
  },
  construccionPiscinas: {
    nombre: "Construcción de Piscinas",
    descripcion:
      "Construimos piscinas de alta calidad con los mejores materiales.",
    icono: "fa-water",
  },
  remodelacion: {
    nombre: "Remodelación",
    descripcion:
      "Renovamos y mejoramos piscinas existentes para darles un nuevo aspecto.",
    icono: "fa-tools",
  },

  mantenimiento: {
    nombre: "Mantenimiento Regular",
    descripcion:
      "Ofrecemos servicios de mantenimiento para mantener tu piscina en perfecto estado.",
    icono: "fa-cogs",
  },

  asesoramiento: {
    nombre: "Asesoramiento Profesional",
    descripcion:
      "Brindamos asesoría experta en la elección de diseños y materiales.",
    icono: "fa-comment-dots",
  },

  instalacionCalefaccion: {
    nombre: "Instalación de Calefacción",
    descripcion:
      "Instalamos sistemas de calefacción para que puedas disfrutar de tu piscina durante todo el año.",
    icono: "fa-fire",
  },

  automatizacionPiscinas: {
    nombre: "Automatización de Piscinas",
    descripcion:
      "Ofrecemos sistemas de automatización para controlar la temperatura, iluminación y filtración de tu piscina.",
    icono: "fa-robot",
  },

  limpiezaProfunda: {
    nombre: "Limpieza Profunda",
    descripcion:
      "Realizamos limpiezas profundas para eliminar cualquier residuo acumulado y mantener tu piscina en las mejores condiciones.",
    icono: "fa-broom",
  },
};

// testimonios

const testimonios = {
  testimonio1: {
    nombre: "Ana Pérez",
    comentario:
      "El servicio fue excepcional y la piscina quedó mejor de lo que imaginábamos.",
    imagen: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  testimonio2: {
    nombre: "Juan Rodríguez",
    comentario:
      "Muy satisfecho con la calidad del trabajo y la atención al cliente. La piscina es un sueño hecho realidad.",
    imagen: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  testimonio3: {
    nombre: "Laura Gómez",
    comentario:
      "Excelente servicio y resultados. La atención fue personalizada y el resultado final superó nuestras expectativas.",
    imagen: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  testimonio4: {
    nombre: "Carlos Fernández",
    comentario:
      "La renovación de nuestra piscina fue increíble. El proceso fue profesional y el resultado espectacular.",
    imagen: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  testimonio5: {
    nombre: "María Martínez",
    comentario:
      "Quedamos muy impresionados con la calidad del trabajo y la rapidez. Definitivamente los recomendaría.",
    imagen: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  testimonio6: {
    nombre: "Pedro Sánchez",
    comentario:
      "Gran atención al detalle y excelente servicio. La piscina que crearon para nosotros es simplemente maravillosa.",
    imagen: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  testimonio7: {
    nombre: "Sofía Ruiz",
    comentario:
      "Desde el primer contacto hasta la finalización del proyecto, todo fue manejado de manera profesional y eficiente.",
    imagen: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  testimonio8: {
    nombre: "Jorge López",
    comentario:
      "El equipo hizo un trabajo sobresaliente. La piscina quedó mejor de lo que esperábamos. ¡Estamos encantados!",
    imagen: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  testimonio9: {
    nombre: "Isabel García",
    comentario:
      "Un servicio excepcional, con atención personalizada y resultados de alta calidad. ¡Estamos muy contentos con nuestra nueva piscina!",
    imagen: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  testimonio10: {
    nombre: "David Moreno",
    comentario:
      "El proceso fue transparente y el resultado final es simplemente espectacular.",
    imagen: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  testimonio11: {
    nombre: "Lucía López",
    comentario:
      "La piscina diseñada para nosotros superó nuestras expectativas. ",
    imagen: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  testimonio12: {
    nombre: "Fernando Martínez",
    comentario:
      "La calidad del trabajo es impresionante y el equipo fue muy profesional.",
    imagen: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  testimonio13: {
    nombre: "Claudia Pérez",
    comentario:
      "Estamos muy satisfechos con el resultado. La atención al cliente fue excepcional y el proyecto se completó a tiempo.",
    imagen: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  testimonio14: {
    nombre: "Andrés Ramírez",
    comentario:
      "El trabajo realizado en nuestra piscina fue excelente. La calidad y el detalle fueron impresionantes.",
    imagen: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  testimonio15: {
    nombre: "Paola Morales",
    comentario:
      "Un servicio de primera calidad. La piscina quedó increíble y el equipo fue muy profesional y atento.",
    imagen: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  testimonio16: {
    nombre: "Ricardo Vega",
    comentario:
      "Desde el diseño hasta la ejecución, todo fue perfecto. La piscina es maravillosa y estamos muy contentos con el resultado.",
    imagen: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  testimonio17: {
    nombre: "Valentina Ruiz",
    comentario:
      "El trabajo superó nuestras expectativas. La piscina es espectacular y el servicio fue excepcional.",
    imagen: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  testimonio18: {
    nombre: "Gabriel Castillo",
    comentario:
      "Todo el proceso fue muy profesional y el resultado final es impresionante. Recomiendo este servicio sin dudarlo.",
    imagen: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  testimonio19: {
    nombre: "Natalia Gómez",
    comentario:
      "La piscina quedó como en nuestros sueños. Excelente atención al cliente y un trabajo de alta calidad.",
    imagen: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  testimonio20: {
    nombre: "Alejandro Silva",
    comentario:
      "Un servicio increíble con resultados espectaculares. La piscina es justo lo que queríamos y más.",
    imagen: "https://randomuser.me/api/portraits/men/10.jpg",
  },
};

// Render cards Services

document.addEventListener("DOMContentLoaded", () => {
  const serviciosContainer = document.getElementById("serviciosContainer");

  function createServiceCard(servicio, { nombre, descripcion, icono }) {
    const servicioCard = document.createElement("div");
    servicioCard.classList.add("servicio-card");

    const iconoElement = document.createElement("i");
    iconoElement.classList.add("fa", icono);

    const nombreElement = document.createElement("h3");
    nombreElement.textContent = nombre;

    const descripcionElement = document.createElement("p");
    descripcionElement.textContent = descripcion;

    servicioCard.appendChild(iconoElement);
    servicioCard.appendChild(nombreElement);
    servicioCard.appendChild(descripcionElement);

    return servicioCard;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  Object.keys(servicios).forEach((servicio) => {
    const servicioCard = createServiceCard(servicio, servicios[servicio]);
    serviciosContainer.appendChild(servicioCard);
    observer.observe(servicioCard);
  });
});

// Render cards Gallery

document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("galleryContainer");
  const imageModal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const caption = document.getElementById("caption");
  const closeModal = document.querySelector(".close");

  function createGalleryItem(key, { nombre, url }) {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";

    const image = document.createElement("img");
    image.src = url;
    image.alt = nombre;

    image.addEventListener("click", () => {
      modalImage.src = url;
      caption.innerHTML = `<h3>${nombre}</h3>`;
      imageModal.style.display = "block";
    });

    const captionDiv = document.createElement("div");
    captionDiv.className = "caption";
    captionDiv.innerHTML = `<h3>${nombre}</h3>`;

    galleryItem.appendChild(image);
    galleryItem.appendChild(captionDiv);

    return galleryItem;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  Object.keys(fotos).forEach((key) => {
    const galleryItem = createGalleryItem(key, fotos[key]);
    galleryContainer.appendChild(galleryItem);
    observer.observe(galleryItem);
  });

  closeModal.addEventListener("click", () => {
    imageModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === imageModal) {
      imageModal.style.display = "none";
    }
  });
});

// Render testimonials automatically

document.addEventListener("DOMContentLoaded", () => {
  const testimoniosContainer = document.getElementById("testimonialsContainer");
  let currentIndex = 0;
  const intervalTime = 3000;

  if (testimoniosContainer) {
    Object.keys(testimonios).forEach((key) => {
      const { nombre, comentario, imagen } = testimonios[key];

      const testimonioItem = document.createElement("div");
      testimonioItem.className = "testimonio";

      const imagenCliente = document.createElement("img");
      imagenCliente.src = imagen;
      imagenCliente.alt = nombre;

      const comentarioCliente = document.createElement("div");
      comentarioCliente.className = "comentario";
      comentarioCliente.innerHTML = `
        <h3>${nombre}</h3>
        <p>${comentario}</p>
      `;

      testimonioItem.appendChild(imagenCliente);
      testimonioItem.appendChild(comentarioCliente);

      testimoniosContainer.appendChild(testimonioItem);
    });

    const testimoniosItems = document.querySelectorAll(".testimonio");
    const totalItems = testimoniosItems.length;

    function updateCarousel() {
      const offset = -currentIndex * 100;
      testimoniosItems.forEach((item) => {
        item.style.transform = `translateX(${offset}%)`;
      });
    }

    function autoSlide() {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    }

    setInterval(autoSlide, intervalTime);
  } else {
    console.error("No se encontró el contenedor de testimonios.");
  }
});
