import React from "react";
import { 
    StyleSheet,
    Button,
    TextInput,
    View,
    Text 
} from "react-native";
import { globalStyles } from "../styles/Globalstyle";
import { Formik } from "formik";
import * as yup from "yup";
import { openDatabase } from "expo-sqlite";
const db = openDatabase("use.db");

// Check if the items table exists if not create it
db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS tuser (id TEXT, fullname TEXT, email TEXT, nohp TEXT)'
    )
  });

const reviewSchema = yup.object({
    fullname: yup.string().required().min(3),
    nohp: yup.string().required().min(11),
    email: yup.string().required().min(10),
});

function FormScreen({ Updatedata }) {
    return (
        <View style={ globalStyles.container }>
            <Formik 
                initialValues={{
                    fullname: "",
                    nohp: "",
                    email: ""
                }}
                onSubmit={(values) => {
                   // alert(JSON.stringify(values));
                    Updatedata(values);                    
                }}
                validationSchema={ reviewSchema }
            >
                {(props) => (
                    <View>
                        <TextInput 
                            style={ globalStyles.input }
                            placeholder="Fullname"
                            onChangeText={ props.handleChange("fullname") }
                            value={ props.values.fullname }
                            onBlur={ props.handleBlur("fullname") }
                        />
                        <Text style={ globalStyles.erroText }>
                            { props.touched.fullname && props.errors.fullname }
                        </Text>

                        <TextInput 
                            multiline
                            style={ globalStyles.input }
                            placeholder="No. Handphone"
                            onChangeText={ props.handleChange("nohp") }
                            value={ props.values.nohp }
                            onBlur={ props.handleBlur("nohp") }
                        />
                        <Text style={ globalStyles.erroText }>
                            { props.touched.nohp && props.errors.nohp }
                        </Text>

                        <TextInput 
                            style={ globalStyles.input }
                            placeholder="Email"
                            onChangeText={ props.handleChange("email") }
                            value={ props.values.email }
                            onBlur={ props.handleBlur("email") }
                        />
                        <Text style={ globalStyles.erroText }>
                            { props.touched.email && props.errors.email }
                        </Text>

                        <Button 
                            title="Update"
                            style={ globalStyles.button }
                            onPress={ props.handleSubmit } 
                        />

                    </View>
                )}
            </Formik>

        </View>
    );
}

export default FormScreen;