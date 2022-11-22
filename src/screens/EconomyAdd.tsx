import { useState, useEffect } from "react";
import { ButtonBack } from "@components/ButtonBack";
import { useForm } from "react-hook-form";
import { VStack, HStack } from "native-base";
import { CategorySelect } from "./CategorySelect";
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { TransactionTypeButton } from "@components/TransactionTypeButton";
import { CategorySelectButton } from "@components/CategorySelectButton";
import { InputForm } from "@components/InputForm";
import Button from "@components/Button";

import uuid from "react-native-uuid";

import AsyncStorage from "@react-native-async-storage/async-storage";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  name: string;
  amount: string;
}

const shema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  amount: Yup.number()
    .typeError("Informe um valor numerico")
    .positive("O valor não pode ser negativo")
    .required("O valor é obrigatório"),
});

export function EconomyAdd({ navigation }: any) {
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const dataKey = "@MYPets:transactions";

  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(shema) });

  async function handleRegister(form: FormData) {
    if (!transactionType) return Alert.alert("Selecione o tipo da transação");

    if (category.key === "category")
      return Alert.alert("Selecione a categoria");

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
      date: new Date(),
    };

    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, newTransaction];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      reset();
      setTransactionType("");
      setCategory({
        key: "category",
        name: "Categoria",
      });

      navigation.goBack();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível salvar");
    }
  }

  function handleTransactionType(type: "compra" | "comprar") {
    setTransactionType(type);
  }
  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }
  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  const [exercises, setExercises] = useState([
    {
      title: "26.08.22",
      data: ["puxada", "remada"],
    },
    {
      title: "26.08.22",
      data: ["puxada", "remada"],
    },
    {
      title: "26.08.22",
      data: ["puxada", "remada"],
    },
    {
      title: "26.08.22",
      data: ["puxada", "remada"],
    },
    {
      title: "26.08.22",
      data: ["puxada", "remada"],
    },
  ]);

  function handleBack() {
    navigation.goBack();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <VStack
        flex={1}
        alignItems="center"
        pt={"20%"}
        py={"15%"}
        px={"5%"}
        space={"5%"}
      >
        <ButtonBack alignSelf="flex-start" onPress={handleBack} />

        <InputForm
          name="name"
          control={control}
          placeholder="Nome"
          autoCapitalize="sentences"
          autoCorrect={false}
          error={errors.name && errors.name.message}
        />
        <InputForm
          name="amount"
          control={control}
          placeholder="Preço"
          keyboardType="numeric"
          error={errors.amount && errors.amount.message}
        />

        <CategorySelectButton
          onPress={handleOpenSelectCategoryModal}
          title={category.name}
        />

        <HStack space={20}>
          <TransactionTypeButton
            type="compra"
            title="Compra"
            onPress={() => handleTransactionType("compra")}
            isActive={transactionType === "compra"}
          />

          <TransactionTypeButton
            type="comprar"
            title="Comprar"
            onPress={() => handleTransactionType("comprar")}
            isActive={transactionType === "comprar"}
          />
        </HStack>

        <Button title="Enviar" onPress={handleSubmit(handleRegister)} />

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>
      </VStack>
    </TouchableWithoutFeedback>
  );
}
