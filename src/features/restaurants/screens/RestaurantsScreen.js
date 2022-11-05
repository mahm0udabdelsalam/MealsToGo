import * as React from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { spacing } from "../../../utils/sizes";
import { RestaurantInfoCard } from "../components/RestaurantsInfoCard";
import { FlatList, SafeAreaView, StatusBar } from "react-native";

export const ResturantsScreen = () => {
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <FlatList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
            { name: 8 },
            { name: 10 },
          ]}
          renderItem={() => <RestaurantInfoCard />}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};

const SafeArea = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${spacing.md}px;
`;
