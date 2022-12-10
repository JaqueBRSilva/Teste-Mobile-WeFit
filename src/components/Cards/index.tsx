import { StyleSheet } from 'react-native';
import {
    CardContainer, DotIcon,
    FavoriteButtonContainer,
    HorizontalLine,
    LanguageContainer,
    LanguageName,
    RepositoryDescription,
    RepositoryInfos,
    RepositoryName, RowFlexContainer,
    StarIcon,
    StarsContainer,
    StarsNumber,
    TextButton,
    UserImage,
    UserName
} from "./style";

interface ICards {
    userPage: string;
    userImageURL: string;
    repositoryDescription: string;
    numberStars: number;
    language: string | null;
    goToRepoDetails: () => void;
}

const Cards: React.FC<ICards> = ({ userPage, userImageURL, repositoryDescription, numberStars, language, goToRepoDetails }) => {

    return (
        <CardContainer
            style={styles.cardShadow}
            onPress={goToRepoDetails}
        >
            <RepositoryInfos>
                <UserName>
                    <RepositoryName>
                        {userPage}
                    </RepositoryName>
                </UserName>

                <UserImage
                    source={{ uri: `${userImageURL}` }}
                    resizeMode='center'
                />
            </RepositoryInfos>

            <HorizontalLine />

            <RepositoryDescription>
                {repositoryDescription}
            </RepositoryDescription>

            <RowFlexContainer>
                <FavoriteButtonContainer onPress={() => { }}>
                    <StarIcon name="star-sharp" size={18} />
                    <TextButton>Favoritar</TextButton>
                </FavoriteButtonContainer>

                <StarsContainer>
                    <StarIcon name="star-sharp" size={18} />
                    <StarsNumber> {numberStars} </StarsNumber>
                </StarsContainer>

                {language && (
                    <LanguageContainer>
                        <DotIcon name="dot-fill" size={16} />
                        <LanguageName>
                            {language}
                        </LanguageName>
                    </LanguageContainer>
                )}
            </RowFlexContainer>

        </CardContainer>
    )
}

const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }
})

export default Cards;