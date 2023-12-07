// FilePicker.tsx
// 文件选择器
import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';

const FilePicker = () => {
  const [singleFile, setSingleFile] = useState<DocumentPickerResponse | null>(
    null,
  );
  const [multipleFile, setMultipleFile] = useState<
    DocumentPickerResponse[] | null
  >(null);

  // 选择单个文件
  const selectOneFile = async () => {
    try {
      const result = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(result);
      setSingleFile(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err);
      } else {
        throw err;
      }
    }
  };

  const selectMultipleFile = async () => {
    try {
      const results = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        allowMultiSelection: true,
      });
      console.log(results);
      setMultipleFile(results);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err);
      } else {
        throw err;
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>React Native 中的文件选择器示例</Text>
      <View style={styles.content}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={selectOneFile}>
          <Text style={styles.buttonText}>单击此处选择一个文件</Text>
          <Image source={require('./attach.png')} style={styles.iconStyle} />
        </TouchableOpacity>
        {singleFile && (
          <>
            <Text style={styles.textStyle}>文件名：{singleFile.name} </Text>
            <Text style={styles.textStyle}>文件类型：{singleFile.type} </Text>
            <Text style={styles.textStyle}>文件大小：{singleFile.size} </Text>
            <Text style={styles.textStyle}>网址： {singleFile.uri} </Text>
          </>
        )}
        <View style={styles.hr} />
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={selectMultipleFile}>
          <Text style={styles.buttonText}>单击此处选择多个文件 </Text>
          <Image source={require('./attach.png')} style={styles.iconStyle} />
        </TouchableOpacity>
        {multipleFile && (
          <ScrollView>
            {multipleFile.map((item, key) => (
              <View key={key}>
                <Text style={styles.textStyle}>文件名：{item.name} </Text>
                <Text style={styles.textStyle}>文件类型：{item.type}</Text>
                <Text style={styles.textStyle}>文件大小：{item.size}</Text>
                <Text style={styles.textStyle}>网址： {item.uri} </Text>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  buttonStyle: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },
  buttonText: {
    fontSize: 19,
    marginRight: 10,
  },
  iconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
  textStyle: {
    color: 'black',
    fontSize: 15,
    marginTop: 16,
    backgroundColor: '#fff',
  },
  hr: {
    height: 2,
    marginVertical: 10,
    backgroundColor: 'grey',
  },
});

export default FilePicker;
