import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SkeletonCard = () => {
  return (
    <div className="w-full flex mt-2">
      <div className="h-auto w-48 bg-gray-300 items-center justify-center flex flex-none rounded-l" />
      <div className="w-full border-r border-b border-t border-gray-300 bg-white rounded-r px-4 py-2 flex flex-col justify-between leading-normal">
        <div className="text-sm text-gray-700">
          <Skeleton />
        </div>
        <div className="font-bold text-xl capitalize my-1">
          <Skeleton />
        </div>
        <div className="mb-1">
          <div className="text-xs text-gray-600">Type</div>
          <div>
            <Skeleton />
          </div>
        </div>
        <div className="mb-1">
          <div className="text-xs text-gray-600">Height / Weight</div>
          <div className="text-sm">
            <Skeleton />
          </div>
        </div>
        <div className="mb-1">
          <div className="text-xs text-gray-600">Abilities</div>
          <div className="text-sm capitalize">
            <Skeleton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonCard
