import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const router = new Router();

router.get("/workspaces", (ctx) => {
  ctx.response.body = [
    {
      id: 1,
      name: "Franco y Asociados",
      alias: "francoya",
      legalRepresentative: "Juan Leal Franco",
      picture: "https://source.unsplash.com/user/c_v_r/100x100",
      phone: "6862424242",
      tierId: 1,
    },
    {
      name: "Lopez Abogados",
      alias: "lopezabogados",
      legalRepresentative: "Rene Lopez Urrutia",
      picture: "https://source.unsplash.com/user/c_v_r/100x100",
      phone: "6861323232",
      tierId: 1,
      id: 2,
    },
    {
      name: "Abshire-Satterfield",
      alias: "gdocharty0",
      legalRepresentative: "Gavra Docharty",
      phone: "180-682-1953",
      picture:
        "http://localhost:3000/admin/register/workspace/voice-recorder.png",
      tierId: 2,
      id: 3,
    },
    {
      name: "Fisher, Schmidt and Roob",
      alias: "rreynault2",
      legalRepresentative: "Romeo Reynault",
      phone: "588-362-6556",
      picture: "http://localhost:3000/admin/register/workspace/Builder.png",
      tierId: 3,
      id: 4,
    },
  ];
});

router.get("/tiers", (ctx) => {
  ctx.response.body = [
    {
      id: 1,
      users_amount: 3,
      companion_app: true,
      update_notifications: true,
      log_duration: 15,
      storage: 5,
      clients_email_notifications: false,
      cost_control: false,
      price: 10000,
    },
    {
      users_amount: 10,
      companion_app: true,
      update_notifications: true,
      log_duration: 60,
      storage: 10,
      clients_email_notifications: true,
      cost_control: false,
      price: 20000,
      id: 2,
    },
  ];
});

router.get("/users", (ctx) => {
  ctx.response.body = [
    {
      name: "Dahlia Gillespie",
      email: "dah@service.com",
      phone: "6862443020",
      carrier: "telcel",
      password: "password",
      picture: "https://i.pravatar.cc/100",
      id: 1,
    },
    {
      id: 2,
      name: "Harry Mason",
      email: "harrym@service.com",
      phone: "6861243420",
      carrier: "movistar",
      password: "password2",
      picture: "https://i.pravatar.cc/100",
    },
    {
      name: "Arsene Lupin",
      email: "alupin@service.com",
      phone: "6865441598",
      carrier: "telcel",
      password: "password",
      picture: "https://i.pravatar.cc/100",
      id: 3,
    },
  ];
});
router.get("/expedients", (ctx) => {
  ctx.response.body = [
    {
      id: 1,
      workspaceId: 1,
      internalId: 1,
      clientName: "Pedro Vargas",
      clientEmail: "pvargas@cielo.com",
      clientPhone: "5553241569",
      expedientNumber: "30102021AB",
      groupNumber: "215",
      userId: 1,
      category: "familiar",
      counterpart: "Jorge Aguilar",
      status: "En espera de acuerdo",
      authorityId: 6,
      book: 4,
      amparo: 123456,
      quantity: 5,
      currency: "MXN",
      initialDate: "2022-09-09",
    },
    {
      workspaceId: 1,
      internalId: 2,
      clientName: "Jose Alfredo Jimenez",
      clientEmail: "pepejimenez@cielo.com",
      clientPhone: "5636581110",
      expedientNumber: "33112441CD",
      groupNumber: "29",
      userId: 1,
      category: "familiar",
      counterpart: "Laureano Brizuela",
      status: "En espera de acuerdo",
      authorityId: 7,
      book: 6,
      amparo: 332211,
      quantity: 5,
      currency: "MXN",
      initialDate: "2022-09-10",
      id: 2,
    },
    {
      clientNumber: "6",
      internalId: 7,
      initialDate: "2022-09-29",
      clientName: "Armando Cruz",
      clientPhone: "1234567891",
      clientEmail: "armando@correo.com",
      groupNumber: "23",
      leaderName: "Calv Bole",
      expedientNumber: "5",
      category: "Familiar",
      counterpart: "Jacki Allcroft",
      book: 89,
      amparo: 10,
      quantity: 900,
      currency: "MXN",
      id: 1664299130729.4749,
      workspaceId: 1,
      userId: 1,
      status: "En espera de acuerdo",
      authorityId: 6,
    },
  ];
});

router.get("/expedient_files", (ctx) => {
  ctx.response.body = [
    {
      workspaceId: 1,
      expedientId: 1,
      fileName: "acta_pedro_paramo.pdf",
      url: "https://source.unsplash.com/user/c_v_r/100x100",
      tags: "acta",
      userId: 1,
      id: 1,
      updatedAt: "2022-01-05T02:47:28Z",
    },
    {
      workspaceId: 1,
      expedientId: 1,
      fileName: "acta_ana.pdf",
      url: "https://source.unsplash.com/user/c_v_r/100x100",
      tags: "acta",
      userId: 1,
      id: 2,
      updatedAt: "2022-06-16T21:57:15Z",
    },
    {
      fileName: "voice-recorder.png",
      tags: "portada",
      workspaceId: 1,
      expedientId: 1664299130729.4749,
      userId: 1,
      id: 1664318128936.5535,
      url: "http://localhost:3000/expedients/1664299130729.4749/voice-recorder.png",
      updatedAt: "2022-09-27T22:35:28.936Z",
    },
    {
      fileName: "Builder.png",
      tags: "diagramas",
      workspaceId: 1,
      expedientId: 1664299130729.4749,
      userId: 1,
      id: 1664318403911.7964,
      url: "http://localhost:3000/expedients/1664299130729.4749/Builder.png",
      updatedAt: "2022-09-27T22:40:03.911Z",
    },
    {
      fileName: "this-is-fine.png",
      tags: "this is fine",
      workspaceId: 1,
      expedientId: 1664299130729.4749,
      userId: 1,
      id: 1664401888030.2622,
      url: "http://localhost:3000/workspaces/expedients/1664299130729.4749/this-is-fine.png",
      updatedAt: "2022-09-28T21:51:28.030Z",
    },
    {
      fileName: "goku.png",
      tags: "goku",
      workspaceId: 1,
      expedientId: 1,
      userId: 1,
      id: 1665170278768.4387,
      url: "http://localhost:3000/workspaces/expedients/1/goku.png",
      updatedAt: "2022-10-07T19:17:58.768Z",
    },
    {
      fileName: "seea.jpg",
      tags: "aaa",
      workspaceId: 1,
      expedientId: 1,
      userId: 1,
      id: 1665170503535.1584,
      url: "http://localhost:3000/workspaces/expedients/1/seea.jpg",
      updatedAt: "2022-10-07T19:21:43.535Z",
    },
    {
      fileName: "barcelona-home-shirt.jpg",
      tags: "aaaa",
      workspaceId: 1,
      expedientId: 1,
      userId: 1,
      id: 1665170714439.1353,
      url: "http://localhost:3000/workspaces/expedients/1/barcelona-home-shirt.jpg",
      updatedAt: "2022-10-07T19:25:14.439Z",
    },
    {
      fileName: "barcelona-third-away-jersey.png",
      tags: "aaaa",
      workspaceId: 1,
      expedientId: 1,
      userId: 1,
      id: 1665170753485.989,
      url: "http://localhost:3000/workspaces/expedients/1/barcelona-third-away-jersey.png",
      updatedAt: "2022-10-07T19:25:53.485Z",
    },
  ];
});

export default router;
