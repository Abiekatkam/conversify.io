"use server";

import { prisma } from "@/lib/prisma";

export const onCompleteUserRegistration = async (fullname, clerkId, type) => {
  try {

    const registered = await prisma.user.create({
      data: {
        fullName: fullname,
        clerkId,
        type,
        subscriptions: {
          create: {},
        },
      },
      select: {
        fullName: true,
        id: true,
        type: true,
      },
    });


    if (registered) {
      return { status: 200, user: registered };
    }
  } catch (error) {
    return { status: 400 };
  }
};
