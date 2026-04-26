import Verify from "@/components/auth/verify";

const VerifyPage = ({ params }: { params: { _id: string } }) => {
  const { _id } = params;
  return (
    <>
      <Verify _id={_id} />
    </>
  );
};

export default VerifyPage;
