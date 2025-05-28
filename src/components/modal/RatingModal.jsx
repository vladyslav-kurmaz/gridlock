

import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import RippleButton from "../buttons/RippleButton";
import useGameStatistics from "../../hooks/useGameStatisticss"; 
import { formatTime } from "../../utils/formatTime";

const StatisticsText = ({ label, value }) => (
  <div className="mt-2 w-full md:max-w-96">
    <span className="inline-block w-40 text-right">{label}</span>
    <span className="pl-4">:</span>
    <span className="inline-block w-32 md:w-40">{value}</span>
  </div>
);

const StatisticsModal = ({ setOpenRules }) => {
  const { t } = useTranslation();

  const {
    totalPlayed,
    winRatio,
    winStreak,
    averageWinTime,
    fastestWinTime,
    latestWinTime,
    resetStatistics,
  } = useGameStatistics();

  const closeModal = () => {
    setOpenRules(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        layout
        variants={{
          open: { opacity: 1 },
          closed: { opacity: 0 },
        }}
        className="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-black/50 p-4"
        onClick={closeModal}
      >
        <div
          className={`relative flex max-h-full w-full flex-col items-center justify-between overflow-y-auto overflow-x-hidden rounded border bg-white pb-4 shadow-md dark:border-majky-400 dark:bg-slate-900/80 max-md:fixed max-md:left-0 max-md:top-0 max-md:h-full max-sm:w-full md:max-w-screen-md`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <h2 className="w-full border-b border-majky-600 pb-1 pt-7 text-center text-2xl font-bold text-majky-800 shadow dark:text-majky-400">
            {t("statistics")}
          </h2>
          <div className="mt-4 flex w-full flex-col items-center text-center">
            <StatisticsText label={t("totalPlayed")} value={totalPlayed} />
            <StatisticsText label={t("winRatio")} value={winRatio.toFixed(2)} />
            <StatisticsText label={t("winStreak")} value={winStreak} />
            <StatisticsText label={t("highestWinStreak")} value={winStreak} />
            <StatisticsText
              label={t("averageWinTime")}
              value={formatTime(Math.floor(averageWinTime))}
            />
            <StatisticsText
              label={t("fastestWinTime")}
              value={formatTime(fastestWinTime)}
            />
            <StatisticsText
              label={t("latestWinTime")}
              value={formatTime(latestWinTime)}
            />
          </div>
          <div className="mt-4 text-balance text-center text-sm text-majky-600">
            {t(
              "note"
            )}
          </div>
          <div className="mt-4 grid w-full max-w-80 grid-cols-2 gap-2 font-medium">
            <RippleButton
              className="rounded border-majky-200 bg-majky-50 py-1 text-center text-majky-800 dark:bg-slate-800 dark:text-majky-400"
              onClick={resetStatistics}
            >
              {t("reset1")}
            </RippleButton>
            <RippleButton
              className="rounded border-majky-200 bg-majky-400 py-1 text-center text-white dark:bg-majky-600 dark:text-slate-800"
              onClick={closeModal}
            >
              {t("cancel")}
            </RippleButton>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StatisticsModal;
