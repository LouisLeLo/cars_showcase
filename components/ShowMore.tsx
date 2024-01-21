'use client';

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
    // const router = useRouter();

    // Hàm dùng để xử lý chức năng điều hướng
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;

        // const newPathName = updateSearchParams("limit", `${newLimit}`);

        // router.push(newPathName);

        setLimit(newLimit);
    }

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {/* Kiểm tra xem có những thành phần tiếp theo hay không */}
            {!isNext && (
                <CustomButton
                    title="Show More"
                    btnType="button"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    // Dùng để xử lý việc điều hướng
                    handleClick={handleNavigation}
                />
            )}
        </div>
    )
}

export default ShowMore