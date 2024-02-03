"use client";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; //todo: change to API clal

  if (!data?.length && query.search) {
    return <div>{`No board matching ${query.search} found`}</div>;
  }

  if (!data?.length && query.favorites) {
    return <div>No favorites found</div>;
  }

  if (!data?.length) {
    return <div>No boards</div>;
  }

  return <div>{JSON.stringify(query)}</div>;
};
