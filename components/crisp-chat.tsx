"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8bccfa40-6cc1-4fd9-ab63-c8637250283b");
  }, []);
};
