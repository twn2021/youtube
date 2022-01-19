import React from "react";
import styled from "styled-components";

const VideoList = ({data}) => {

    return (
        <>
        <Wrap>
        <Container>
            {data.map(({id,title,views,timestamp,channelImage,channel,image,}) => (
            <Short key={id}>
                <Content>
                    <ChannelImage src={channelImage}/>
                </Content>
                <Info>
                    <MiniProfile>
                        <Image src={image} />
                    </MiniProfile>
                    <Text>
                        <Title>{title}</Title>
                        <Channel>{channel}</Channel>
                        <Count>
                            <View>{views}회</View>
                            <Span>•</Span>
                            <Timestamp>{timestamp}일 전</Timestamp>
                        </Count>
                    </Text> 
                </Info>
            </Short>
            ))}
        </Container>
        </Wrap>
        </>
      
    )
}; 


const Wrap = styled.div`
display: flex;
width: 100%;
background-color: #f9f9f9;
padding: 40px 20px;
padding-bottom: 0;
`;

const Container = styled.div`
display: flex;
justify-content: left;
flex-wrap: wrap;
`;

const Info = styled.div`
display: flex;
padding: 0 30px 0 8px;
`;

const MiniProfile = styled.div`
`;

const Text = styled.p`
margin-top: 12px;
`;

const Short = styled.div`
margin-bottom: 40px;
width: 25%;
`;

const Content = styled.div`
padding: 0 8px;
`;

const Title = styled.div`
overflow: hidden;
display: box;
display: -webkit-box;
font-size: 14px;
overflow: hidden;
text-overflow: ellipsis;
max-height: 37px;
margin-bottom: 8px;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
padding: 0 24px 0 0;
`;

const ChannelImage = styled.img`
width: 100%;
height: 0 auto;
`;

const Count = styled.div`
display: flex;
font-size: 12px;
`;

const Channel = styled.div`
font-size: 12px;
color: #606060;
`;

const View = styled.div`
color: #606060;
`;

const Span  = styled.span`
color: #606060;
margin: 0 4px;
`;

const Timestamp= styled.div`
color: #606060;
`;

const Image = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
margin: 12px 12px 0 0;
`;

export default VideoList; 
