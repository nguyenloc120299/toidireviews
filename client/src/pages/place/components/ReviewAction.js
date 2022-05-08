import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import LikeButton from '../../../components/LikeButton'
const ReviewAction = ({ item }) => {
    const [isLike, setIsLike] = useState(false)
    const { auth } = useSelector(state => state)
    useEffect(() => {
        if (item.likes.find(like => like === auth.user._id)) {

            setIsLike(true)
        } else {
            setIsLike(false)
        }
    }, [item.likes, auth.user._id])
    return (
        <Box px={3}>
            <Flex >
                <LikeButton
                    isLike={isLike}
                    item={item}
                />
                <Button
                    background={'transparent'}
                    _focus={{
                        border: "unset",
                        background: "unset"
                    }}
                    _active={{
                        background: "transparent"
                    }}
                    _hover={{
                        background: "unset"
                    }}
                >
                    Trả lời
                </Button>
            </Flex>
        </Box>
    )
}

export default ReviewAction