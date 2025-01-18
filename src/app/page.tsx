"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {Icon} from '@iconify/react'
import { monaSpace } from "./fonts";

export default function Home() {
  const { t } = useTranslation()
  const [dotCount, setDotCount] = useState(0)
  const dots = useMemo(() => '.'.repeat(dotCount), [dotCount])

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((dotAmount) => (dotAmount + 1) % 4);
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="h-full w-full flex flex-col justify-center gap-2 items-center">
      <Icon className="text-red-400 h-1/3" icon="iconoir:wolf-solid" width="128" height="128" />
      <h1 className={`text-4xl font-bold text-red-400 select-none ${monaSpace.className}`}>
        {t('frontPage.helloWorld')}
      </h1>
      <h1 className={`text-xl w-1/2 flex-grow text-red-400 select-none ${monaSpace.className}`}>
        {t('frontPage.wipText', {dots: dots})}
      </h1>
    </div>
  );
}
