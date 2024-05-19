import clsx from 'clsx'
import React from 'react'

type Props = { selected: boolean }

const RobotHead = ({ selected }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="7"
        width="18"
        height="12"
        rx="2"
        className={clsx(
          'dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#7540A9]',
          { 'dark:!fill-[#C8C7FF] fill-[#7540A9]': selected }
        )}
      />
      <circle
        cx="8"
        cy="13"
        r="1.5"
        className={clsx(
          'dark:group-hover:fill-[#9F54FF] transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-[#BD8AFF]',
          { 'dark:!fill-[#7540A9] fill-[#BD8AFF]': selected }
        )}
      />
      <circle
        cx="16"
        cy="13"
        r="1.5"
        className={clsx(
          'dark:group-hover:fill-[#9F54FF] transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-[#BD8AFF]',
          { 'dark:!fill-[#7540A9] fill-[#BD8AFF]': selected }
        )}
      />
      <rect
        x="11"
        y="15"
        width="2"
        height="1"
        className={clsx(
          'dark:group-hover:fill-[#9F54FF] transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-[#BD8AFF]',
          { 'dark:!fill-[#7540A9] fill-[#BD8AFF]': selected }
        )}
      />
      <rect
        x="11"
        y="2"
        width="2"
        height="4"
        className={clsx(
          'dark:group-hover:fill-[#9F54FF] transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-[#BD8AFF]',
          { 'dark:!fill-[#7540A9] fill-[#BD8AFF]': selected }
        )}
      />
    </svg>
  )
}

export default RobotHead